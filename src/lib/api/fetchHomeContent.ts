import HomeContentQuery from '@graphql/HomeContent.gql';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { IArtwork, ITestimonial } from './types';

interface HomeContentResponse {
    allHome_abouts: {
        edges: [
            {
                node: {
                    content: RichTextBlock[];
                };
            },
        ];
    };
    allArtworks: {
        edges: {
            node: {
                title: RichTextBlock[];
                thumb: RichTextBlock;
            };
        }[];
    };
    allClients: {
        edges: {
            node: {
                name: RichTextBlock[];
                picture: RichTextBlock;
                content: RichTextBlock[];
                date: string;
            };
        }[];
    };
}

export const fetchHomeContent =
    (client: ApolloClient<NormalizedCacheObject>) =>
    async (): Promise<{
        about: RichTextBlock[];
        logos: IArtwork[];
        testimonials: ITestimonial[];
    }> => {
        try {
            const res = await client.query<HomeContentResponse>({
                query: HomeContentQuery,
            });

            const about = res.data.allHome_abouts.edges[0].node.content;

            const logos: IArtwork[] = res.data.allArtworks.edges.map(
                ({ node }) => ({
                    title: RichText.asText(node.title),
                    thumb: node.thumb.url ?? '',
                    type: 'Logo',
                }),
            );

            const testimonials: ITestimonial[] = res.data.allClients.edges.map(
                ({ node }) => ({
                    name: RichText.asText(node.name),
                    content: node.content,
                    date: node.date,
                    picture: node.picture.url ?? '',
                }),
            );

            return { about, logos, testimonials };
        } catch (e) {
            throw e;
        }
    };
