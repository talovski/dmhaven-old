import React from "react";
import { initializeApollo } from "../lib/apolloClient"
import { ALL_SPELLS, ALL_EQUIPMENT } from '../lib/queries';
import Search from '../components/Interface/Search'
import ActiveCategory from "../components/Interface/ActiveCategory";
import { useState } from "react";

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_SPELLS, ALL_EQUIPMENT
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default function Home() {
  
  //active filter determines which category of items to show
  const [activeFilter, setActiveFilter] = useState("")
  
  // select equipment and select spells determine the state of the button
  const [selectEquipment, setSelectEquipment] = useState(false)
  const [selectSpells, setSelectSpells] = useState(false)
  const [selectCondition, setSelectCondition] = useState(false)
  const [activeSearch, setActiveSearch] = useState("")


  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold">D&D Spells</h1>
      <Search 
        activeFilter={activeFilter}       setActiveFilter={setActiveFilter}
        activeSearch={activeSearch}       setActiveSearch={setActiveSearch}
        selectEquipment={selectEquipment} setSelectEquipment={setSelectEquipment}
        selectSpells={selectSpells}       setSelectSpells={setSelectSpells}
        selectCondition={selectCondition} setSelectCondition={setSelectCondition}
      />
      <ActiveCategory
        activeSearch={activeSearch} setActiveSearch={setActiveSearch}
        activeFilter={activeFilter}
        selectEquipment={selectEquipment}
        selectSpells={selectSpells}
        selectCondition={selectCondition}
        />

    </div>
  )
} 
