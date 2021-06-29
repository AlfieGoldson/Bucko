import Head from 'next/head';
import { getAllWork, IWork } from '@util/api';
import { GetStaticProps } from 'next';
import { WorkGrid } from '@components/WorkGrid';
import { Layout } from '@components/Layout';
import { Content } from '@components/Content';

interface Props {
	artworks: IWork[];
}

export default function WorkPage({ artworks }: Props) {
	console.log(artworks);
	return (
		<>
			<Head>
				<title>Home • Paro</title>
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
	const artworks = getAllWork().filter((p) =>
		['Artwork', 'Logo', 'TwitchEmote'].includes(p.type)
	);

	console.log(getAllWork(), artworks);

	return {
		props: {
			artworks,
		},
	};
};
