import { Landing } from '@components/Landing';
import Head from 'next/head';
import { Content } from '@components/Content';
import { Layout } from '@components/Layout';
import { getAllWork, IWork } from '@util/api';
import { GetStaticProps } from 'next';
import { LogoGrid } from '@components/LogoGrid';
import React from 'react';
import { shuffle } from '@util/shuffle';

interface Props {
	logos: IWork[];
}

export default function Home({ logos }: Props) {
	return (
		<>
			<Head>
				<title>Home • Paro</title>
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
						cards={shuffle(logos)
							.slice(0, 8)
							.map(({ title, coverImage }) => ({
								title,
								image: coverImage,
							}))}
						cta={{ href: '/work', title: 'View More!' }}
					/>
				</Content>
				<div className='lightAltBG'>
					<Content>
						<h2 id='about'>About Us.</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras viverra sit amet eros at vehicula.
							Aliquam finibus pretium cursus. Ut vulputate, ex ac
							maximus fermentum, lectus lacus porttitor orci, in
							feugiat urna dolor ac risus. Ut id quam nec nisi
							tristique faucibus quis mollis justo. Curabitur
							facilisis scelerisque posuere. Nullam aliquam, erat
							nec commodo consequat, elit dolor luctus ex, vel
							tempor lectus tellus sed diam. Fusce tincidunt neque
							orci, non efficitur enim rutrum eu. Cras ornare
							accumsan ipsum in porta.
						</p>
					</Content>
				</div>
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const logos = getAllWork().filter((p) => p.type === 'Logo');

	return {
		props: {
			logos,
		},
	};
};
