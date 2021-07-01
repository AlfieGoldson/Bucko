import { PrismicLink } from 'apollo-link-prismic';
import { ApolloClient, InMemoryCache } from '@apollo/client';
// import gql from 'graphql-tag';
import HomeAboutQuery from '@graphql/HomeContent.gql';
import ArtworksQuery from '@graphql/AllArtworks.gql';
import { RichText, RichTextBlock } from 'prismic-reactjs';

const client = new ApolloClient({
	link: PrismicLink({
		uri: process.env.PRISMIC_URI,
	}),
	cache: new InMemoryCache(),
});

interface HomeContentResponse {
	allHome_abouts: {
		edges: [
			{
				node: {
					content: RichTextBlock[];
				};
			}
		];
	};
	allArtworks: {
		edges: [
			{
				node: {
					title: RichTextBlock[];
					thumb: RichTextBlock;
				};
			}
		];
	};
}

export const fetchHomeContent = async () => {
	try {
		const res = await client.query<HomeContentResponse>({
			query: HomeAboutQuery,
		});

		const about = res.data.allHome_abouts.edges[0].node.content;
		const logos = res.data.allArtworks.edges.map(({ node }) => ({
			title: RichText.asText(node.title),
			image: node.thumb.url ?? '',
		}));

		return { about, logos };
	} catch (e) {
		throw e;
	}
};

interface ArtworksQueryResponse {
	allArtworks: {
		edges: [
			{
				node: {
					title: RichTextBlock[];
					thumb: RichTextBlock;
					type: string;
				};
			}
		];
	};
}

export interface IArtwork {
	title: string;
	thumb: string;
	type: string;
}

export const fetchAllArtworks = async () => {
	try {
		const res = await client.query<ArtworksQueryResponse>({
			query: ArtworksQuery,
		});

		const artworks = res.data.allArtworks.edges.map(({ node }) => ({
			title: RichText.asText(node.title),
			thumb: node.thumb.url ?? '',
			type: node.type,
		}));

		console.log({ artworks });

		return artworks;
	} catch (e) {
		throw e;
	}
};
