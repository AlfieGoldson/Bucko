import { Landing } from '@components/Landing';
import Head from 'next/head';
import { Content } from '@components/Content';
import { Layout } from '@components/Layout';
import { GetStaticProps } from 'next';
import { fetchHomeContent } from '@lib/api';
import { IArtwork, ITestimonial } from '@lib/api/types';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { Testimonials } from '@components/Testimonials';
import { ImageSlider } from '@components/ImageSlider';
import { ServiceCardGrid } from '@components/ServiceCardGrid';
import { Button } from '@components/Button';

interface Props {
	logos: IArtwork[];
	about?: RichTextBlock[];
	testimonials: ITestimonial[];
}

export default function HomePage({ logos, about, testimonials }: Props) {
	return (
		<>
			<Head>
				<title>Accueil • Bucko</title>
			</Head>
			<Layout>
				<Landing />
				<div className='lightAltBG'>
					<Content>
						<h2 id='testimonials'>Nos services.</h2>
						<ServiceCardGrid
							services={[
								{
									title: 'Logo Design',
									description:
										'Nous créons votre Logo, pour que votre marque marque soit reconnue.',
									icon: 'https://images.prismic.io/alfie/e687d966-9409-417e-ba09-72cb17353d57_Logo+-+Aerolite.jpg?auto=compress,format&rect=0,0,1080,1080&w=240&h=240',
								},
								{
									title: 'Social Branding',
									description:
										'Design de bannières, photos de profil et autres pour vos réseaux sociaux.',
									icon: 'https://images.prismic.io/alfie/e687d966-9409-417e-ba09-72cb17353d57_Logo+-+Aerolite.jpg?auto=compress,format&rect=0,0,1080,1080&w=240&h=240',
								},
								{
									title: 'Emotes',
									description:
										"Besoin d'Emotes pour votre chaine Twitch ou votre serveur discord? Vous êtes au bon endroit!",
									icon: 'https://images.prismic.io/alfie/e687d966-9409-417e-ba09-72cb17353d57_Logo+-+Aerolite.jpg?auto=compress,format&rect=0,0,1080,1080&w=240&h=240',
								},
								{
									title: 'Charte Graphique',
									description:
										"Une charte graphique est un outil très important pour n'importe quel business, demandez nous!",
									icon: 'https://images.prismic.io/alfie/e687d966-9409-417e-ba09-72cb17353d57_Logo+-+Aerolite.jpg?auto=compress,format&rect=0,0,1080,1080&w=240&h=240',
								},
							]}
						/>
					</Content>
					<ImageSlider images={logos} />
				</div>
				<div className='lightBG'>
					<Content>
						<h2 id='about'>Qui sommes nous?</h2>
						<div>
							<RichText render={about} />
						</div>
					</Content>
				</div>
				<div className='lightAltBG'>
					<Content>
						<h2 id='testimonials'>Ils ont travaillé avec nous!</h2>
						<div>
							<Testimonials testimonials={testimonials} />
						</div>
					</Content>
				</div>
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
		const homeContent = await fetchHomeContent();

		return {
			props: {
				...homeContent,
			},
			revalidate: 60,
		};
	} catch (e) {
		throw e;
	}
};
