import SpellsList, { ALL_SPELLS } from '../components/spellsList'
import { initializeApollo } from "../lib/apolloClient"

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_SPELLS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default function Home() {
  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold">D&D Spells</h1>
      <SpellsList />
    </div>
  )
} 
