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
				{members.map(
					({ name, title, description, picture, socials }) => (
						<div>
							<h3>
								{name} • {title}
							</h3>
							<p>
								<RichText render={description} />
							</p>
						</div>
					)
				)}
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
