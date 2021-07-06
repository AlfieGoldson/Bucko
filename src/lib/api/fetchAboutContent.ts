import Query from '@graphql/AboutContent.gql';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { createQuery } from './createQuery';
import { ITeamMember, SocialPlatform } from './types';

interface QueryResponse {
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

export const fetchAboutContent = async (): Promise<{
    members: ITeamMember[];
}> => {
    const { allMembers } = await createQuery<QueryResponse>(Query);

    const members: ITeamMember[] = allMembers.edges.map(({ node }) => ({
        name: RichText.asText(node.name),
        title: RichText.asText(node.title),
        description: node.description,
        picture: node.picture.url ?? '',
        socials: node.socials.map(({ platform, displayname, link }) => ({
            platform,
            displayname: RichText.asText(displayname),
            link: RichText.asText(link),
        })),
    }));

    return { members };
};
