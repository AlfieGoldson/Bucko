import { RichTextBlock } from 'prismic-reactjs';
import styles from './AboutProfile.module.scss';

interface ITeamMember {
	name: string;
	title: string;
	description: RichTextBlock[];
	picture: string;
	socials: { title: string; link: string };
}

export const AboutProfile = () => {
	return <div></div>;
};
