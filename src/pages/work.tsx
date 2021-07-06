import Head from 'next/head';
import { GetStaticProps } from 'next';
import { WorkGrid } from '@components/WorkGrid';
import { Layout } from '@components/Layout';
import { Content } from '@components/Content';
import { fetchAllArtworks } from '@lib/api';
import { IArtwork } from '@lib/api/types';

interface Props {
    artworks: IArtwork[];
}

export default function WorkPage({ artworks }: Props): JSX.Element {
    return (
        <>
            <Head>
                <title>Travaux • Bucko</title>
            </Head>
            <Layout>
                <Content>
                    <WorkGrid artworks={artworks} />
                </Content>
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const artworks = await fetchAllArtworks();

    return {
        props: {
            artworks,
        },
        revalidate: 60,
    };
};
