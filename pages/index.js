import React, { useState } from "react";

// graphql stuff
import { initializeApollo } from "../lib/apolloClient"
import { ALL_SPELLS } from '../lib/spellQuery'
import { ALL_EQUIPMENT } from "../lib/equipmentQuery";
import { ALL_CONDITIONS } from "../lib/conditionQuery";
import { ALL_MONSTERS } from "../lib/monsterQuery";

// components
import Search from '../components/Interface/Search'
import ActiveCategory from "../components/Interface/ActiveCategory";

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  // prefetching multiple queries
  // haven't found a more elegant solution yet
  await apolloClient.query({
    query: ALL_CONDITIONS
  });
  await apolloClient.query({
    query: ALL_SPELLS
  });
  await apolloClient.query({
    query: ALL_MONSTERS
  });
  await apolloClient.query({
    query: ALL_EQUIPMENT
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("")
  const [activeSearch, setActiveSearch] = useState("")
  
  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold">DM Haven</h1>
      <Search 
        activeFilter={activeFilter}       setActiveFilter={setActiveFilter}
        activeSearch={activeSearch}       setActiveSearch={setActiveSearch}
      />
      <ActiveCategory
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        activeFilter={activeFilter}
        />

    </div>
  )
} 
