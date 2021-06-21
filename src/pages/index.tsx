import { Landing } from '@components/Landing';
import Head from 'next/head';
import { Content } from '@components/Content';
import styles from '@styles/pages/HomePage.module.scss';
import { Layout } from '@components/Layout';
import { ContactForm } from '@components/ContactForm';
import { getAllPosts, IPost } from '@util/api';
import { GetStaticProps } from 'next';
import { LogoGrid } from '@components/LogoGrid';

interface Props {
	artworks: IPost[];
}

export default function Home({ artworks }: Props) {
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
						cards={[
							{
								title: 'Corehalla',
								image: '/work/logos/Corehalla.jpg',
							},
							{
								title: 'Taikiro',
								image: '/work/logos/Taikiro.jpg',
							},
							{
								title: 'Aerolite',
								image: '/work/logos/Aerolite.jpg',
							},
							{
								title: 'Bamboo',
								image: '/work/logos/Bamboo.jpg',
							},
							{
								title: 'Bucko',
								image: '/work/logos/Bucko.jpg',
							},
							{
								title: 'Ludopod',
								image: '/work/logos/Ludopod.jpg',
							},
							{
								title: 'TheMegaPixelArt',
								image: '/work/logos/TheMegaPixelArt.jpg',
							},
							{
								title: 'Mustache',
								image: '/work/logos/Mustache.jpg',
							},
						]}
					/>
					<div>
						{artworks.map((artwork) => (
							<p key={artwork.slug}>{artwork.title}</p>
						))}
					</div>
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
				{/* <div>
					<Content>
						<ContactForm />
					</Content>
				</div> */}
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const artworks = getAllPosts().filter((p) => p.type === 'Artwork');

	return {
		props: {
			artworks,
		},
	};
};
