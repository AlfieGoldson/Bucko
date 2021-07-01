import { Landing } from '@components/Landing';
import Head from 'next/head';
import { Content } from '@components/Content';
import { Layout } from '@components/Layout';
import { GetServerSideProps } from 'next';
import { LogoGrid } from '@components/LogoGrid';
import React from 'react';
import { shuffle } from '@util/shuffle';
import { fetchHomeContent } from '@lib/api';
import { RichText, RichTextBlock } from 'prismic-reactjs';

interface Props {
	logos: { title: string; image: string }[];
	about?: RichTextBlock[];
}

export default function Home({ logos, about }: Props) {
	return (
		<>
			<Head>
				<title>Home • Bucko</title>
			</Head>
			<Layout>
				<Landing />
				<Content>
					<LogoGrid
						title={
							<>
								Designed
								<br />
								with{' '}
								<span role='img' aria-label='heart emoji'>
									❤️
								</span>
								.
							</>
						}
						cards={shuffle(logos).slice(0, 8)}
						cta={{ href: '/work', title: 'View More!' }}
					/>
				</Content>
				<div className='lightAltBG'>
					<Content>
						<h2 id='about'>About Us.</h2>
						<div>
							<RichText render={about} />
						</div>
					</Content>
				</div>
			</Layout>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	// const logos = getAllWork().filter((p) => p.type === 'Logo');

	try {
		const homeContent = await fetchHomeContent();

		return {
			props: {
				...homeContent,
			},
		};
	} catch (e) {
		throw e;
	}
};
