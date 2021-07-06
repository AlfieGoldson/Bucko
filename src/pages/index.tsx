import { Landing } from '@components/Landing';
import Head from 'next/head';
import { Content } from '@components/Content';
import { Layout } from '@components/Layout';
import { GetStaticProps } from 'next';
import { fetchHomePageContent } from '@lib/api';
import { IArtwork, IService, ITestimonial } from '@lib/api/types';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { Testimonials } from '@components/Testimonials';
import { ImageSlider } from '@components/ImageSlider';
import { ServiceCardGrid } from '@components/ServiceCardGrid';

interface Props {
    logos: IArtwork[];
    about?: RichTextBlock[];
    testimonials: ITestimonial[];
    services: IService[];
}

export default function HomePage({
    logos,
    about,
    testimonials,
    services,
}: Props): JSX.Element {
    return (
        <>
            <Head>
                <title>Accueil • Bucko</title>
            </Head>
            <Layout>
                <Landing />
                <div className="lightAltBG">
                    <Content>
                        <h2 id="testimonials">Nos services.</h2>
                        <ServiceCardGrid services={services} />
                    </Content>
                    <ImageSlider images={logos} />
                </div>
                <div className="lightBG">
                    <Content>
                        <h2 id="about">Qui sommes nous?</h2>
                        <div>
                            <RichText render={about} />
                        </div>
                    </Content>
                </div>
                <div className="lightAltBG">
                    <Content>
                        <h2 id="testimonials">Ils ont travaillé avec nous!</h2>
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
        const homeContent = await fetchHomePageContent();

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
