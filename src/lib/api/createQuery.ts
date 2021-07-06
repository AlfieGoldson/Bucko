import {
    ApolloClient,
    InMemoryCache,
    OperationVariables,
} from '@apollo/client';
import { DocumentNode } from 'graphql';
import { PrismicLink } from 'apollo-link-prismic';

const client = new ApolloClient({
    link: PrismicLink({
        uri: process.env.PRISMIC_URI,
    }),
    cache: new InMemoryCache(),
});

export const createQuery = async <T>(
    query: DocumentNode,
    variables: OperationVariables = {},
): Promise<T> => {
    try {
        const res = await client.query<T>({
            query,
            variables,
        });

        return res.data;
    } catch (e) {
        throw e; //TODO: proper error handling
    }
};
