import Query from '@graphql/AllArtworks.gql';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { createQuery } from './createQuery';
import { IArtwork } from './types';

interface QueryResponse {
    allArtworks: {
        edges: [
            {
                node: {
                    title: RichTextBlock[];
                    thumb: RichTextBlock;
                    type: string;
                };
            },
        ];
    };
}

export const fetchAllArtworks = async (): Promise<IArtwork[]> => {
    const { allArtworks } = await createQuery<QueryResponse>(Query);

    const artworks: IArtwork[] = allArtworks.edges.map(({ node }) => ({
        title: RichText.asText(node.title),
        thumb: node.thumb.url ?? '',
        type: node.type,
    }));

    return artworks;
};
