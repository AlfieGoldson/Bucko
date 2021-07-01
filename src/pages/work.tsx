import Head from 'next/head';
import { GetServerSideProps, GetStaticProps } from 'next';
import { WorkGrid } from '@components/WorkGrid';
import { Layout } from '@components/Layout';
import { Content } from '@components/Content';
import { IArtwork, fetchAllArtworks } from '@lib/api';

interface Props {
	artworks: IArtwork[];
}

export default function WorkPage({ artworks }: Props) {
	console.log(artworks);
	return (
		<>
			<Head>
				<title>Home • Bucko</title>
			</Head>
			<Layout>
				<Content>
					<WorkGrid artworks={artworks} />
				</Content>
			</Layout>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const artworks = await fetchAllArtworks();

	return {
		props: {
			artworks,
		},
	};
};
