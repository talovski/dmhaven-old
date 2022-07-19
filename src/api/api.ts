import { GraphQLClient } from 'graphql-request';

export const apiUrl = 'https://www.dnd5eapi.co/graphql';
const client = new GraphQLClient(apiUrl);
export default client;
