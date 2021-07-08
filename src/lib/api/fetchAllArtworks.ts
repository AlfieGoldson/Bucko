import Query from '@graphql/AllArtworks.gql';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { createQuery } from './createQuery';
import { ArtworkThumbDisplay, IArtwork } from './types';

type Thumb = RichTextBlock & Record<ArtworkThumbDisplay, RichTextBlock>;

interface QueryResponse {
    allArtworks: {
        edges: [
            {
                node: {
                    title: RichTextBlock[];
                    thumb: Thumb;
                    thumb_display: ArtworkThumbDisplay | 'main';
                    type: string;
                };
            },
        ];
    };
}

export const fetchAllArtworks = async (): Promise<IArtwork[]> => {
    const { allArtworks } = await createQuery<QueryResponse>(Query);

    const artworks: IArtwork[] = allArtworks.edges.map(
        ({ node: { title, thumb, thumb_display, type } }) => ({
            title: RichText.asText(title),
            thumb:
                thumb_display && thumb_display !== 'main'
                    ? thumb[thumb_display]?.url
                    : thumb.url ?? '',
            thumbDisplay: thumb_display !== 'main' ? thumb_display : null,
            type: type,
        }),
    );

    return artworks;
};
