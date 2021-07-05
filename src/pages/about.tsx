import { AboutProfile } from '@components/AboutProfile';
import { Content } from '@components/Content';
import { Layout } from '@components/Layout';
import { fetchAboutContent } from '@lib/api';
import { ITeamMember } from '@lib/api/types';
import styles from '@styles/pages/AboutPage.module.scss';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

interface Props {
	members: ITeamMember[];
}

export default function AboutPage({ members }: Props) {
	return (
		<Layout>
			<Head>
				<title>À Propos • Bucko</title>
			</Head>
			<Content>
				<h2>Notre Équipe.</h2>
				{members.map((member) => (
					<AboutProfile {...member} />
				))}
			</Content>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
		const aboutContent = await fetchAboutContent();

		return {
			props: {
				...aboutContent,
			},
			revalidate: 60,
		};
	} catch (e) {
		throw e;
	}
};
