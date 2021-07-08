import { RichTextBlock } from 'prismic-reactjs';

export interface ITestimonial {
    name: string;
    content: RichTextBlock[];
    date: string;
    picture: string;
}

export type ArtworkThumbDisplay = 'horizontal' | 'vertical' | 'big' | null;

export interface IArtwork {
    title: string;
    thumb: string;
    thumbDisplay: ArtworkThumbDisplay;
    type: string;
}

export type SocialPlatform =
    | 'Website'
    | 'Youtube'
    | 'Twitter'
    | 'Twitch'
    | 'Linkedin'
    | 'Discord';

export interface ITeamMember {
    name: string;
    title: string;
    description: RichTextBlock[];
    picture: string;
    socials: {
        platform: SocialPlatform;
        displayname: string;
        link: string;
    }[];
}

export interface IService {
    title: string;
    icon: string;
    content: RichTextBlock[];
}
