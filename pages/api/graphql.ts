import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiUrl = 'https://www.dnd5eapi.co/graphql';

const client = new ApolloClient({
	uri: apiUrl,
	cache: new InMemoryCache(),
	connectToDevTools: true,
});
export default client;
