import { PrismicLink } from 'apollo-link-prismic';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { fetchHomeContent as homeContent } from './fetchHomeContent';
import { fetchAllArtworks as allArtworks } from './fetchAllArtworks';
import { fetchAboutContent as aboutContent } from './fetchAboutContent';

const client = new ApolloClient({
	link: PrismicLink({
		uri: process.env.PRISMIC_URI,
	}),
	cache: new InMemoryCache(),
});

export const fetchHomeContent = homeContent(client);
export const fetchAllArtworks = allArtworks(client);
export const fetchAboutContent = aboutContent(client);
