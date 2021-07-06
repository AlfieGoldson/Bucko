import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import AboutContentQuery from '@graphql/AboutContent.gql';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { ITeamMember, SocialPlatform } from './types';

interface AboutContentQueryResponse {
    allMembers: {
        edges: [
            {
                node: {
                    name: RichTextBlock[];
                    title: RichTextBlock[];
                    description: RichTextBlock[];
                    picture: RichTextBlock;
                    socials: {
                        platform: SocialPlatform;
                        displayname: RichTextBlock[];
                        link: RichTextBlock[];
                    }[];
                };
            },
        ];
    };
}

export const fetchAboutContent =
    (client: ApolloClient<NormalizedCacheObject>) =>
    async (): Promise<{ members: ITeamMember[] }> => {
        try {
            const res = await client.query<AboutContentQueryResponse>({
                query: AboutContentQuery,
            });

            const members: ITeamMember[] = res.data.allMembers.edges.map(
                ({ node }) => ({
                    name: RichText.asText(node.name),
                    title: RichText.asText(node.title),
                    description: node.description,
                    picture: node.picture.url ?? '',
                    socials: node.socials.map(
                        ({ platform, displayname, link }) => ({
                            platform,
                            displayname: RichText.asText(displayname),
                            link: RichText.asText(link),
                        }),
                    ),
                }),
            );

            return { members };
        } catch (e) {
            throw e;
        }
    };
