import Query from '@graphql/HomePageContent.gql';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { IArtwork, IService, ITestimonial } from './types';
import { createQuery } from './createQuery';

interface QueryResponse {
    homepage: {
        herotitle: RichTextBlock[];
        herodescription: RichTextBlock[];
        about: RichTextBlock[];
        services: {
            service: {
                title: RichTextBlock[];
                icon: RichTextBlock;
                content: RichTextBlock[];
            };
        }[];
        logos: {
            logo: {
                title: RichTextBlock[];
                thumb: RichTextBlock;
            };
        }[];
        testimonials: {
            client: {
                name: RichTextBlock[];
                picture: RichTextBlock;
                date: string;
                content: RichTextBlock[];
            };
        }[];
    };
}

export const fetchHomePageContent = async (): Promise<{
    about: RichTextBlock[];
    logos: IArtwork[];
    testimonials: ITestimonial[];
    services: IService[];
}> => {
    const { homepage } = await createQuery<QueryResponse>(Query, {
        lang: 'fr-fr',
    });

    const { about, services, logos, testimonials } = homepage;

    return {
        about,
        logos: logos.map(({ logo: { title, thumb } }) => ({
            title: RichText.asText(title),
            thumb: thumb.url ?? '',
            type: 'Logo',
        })),
        testimonials: testimonials.map(
            ({ client: { name, content, date, picture } }) => ({
                name: RichText.asText(name),
                content: content,
                date: date,
                picture: picture.url ?? '',
            }),
        ),
        services: services.map(({ service: { title, icon, content } }) => ({
            title: RichText.asText(title),
            icon: icon.url ?? '',
            content,
        })),
    };
};
