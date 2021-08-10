import React, { useState, FC } from 'react'
import { GetStaticProps } from 'next'

import { initializeApollo } from '../lib/apolloClient'
import { ALL_SPELLS } from '../lib/spellQuery'
import { ALL_EQUIPMENT } from '../lib/equipmentQuery'
import { ALL_CONDITIONS } from '../lib/conditionQuery'
import { ALL_MONSTERS } from '../lib/monsterQuery'

// components
import Search from '../components/Interface/Search'
import ActiveCategory from '../components/Interface/ActiveCategory'

export type ActiveFilterType = {
  activeFilter: string
}

export type ActiveSearchType = {
  activeSearch: string
}

const Home: FC = () => {
  const [activeFilter, setActiveFilter] = useState('')
  const [activeSearch, setActiveSearch] = useState('')

  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold">DM Haven</h1>
      <Search
        setActiveFilter={setActiveFilter}
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
      />
      <ActiveCategory activeSearch={activeSearch} activeFilter={activeFilter} />
    </div>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  // prefetching multiple queries
  // haven't found a more elegant solution yet
  await apolloClient.query({ query: ALL_CONDITIONS })
  await apolloClient.query({ query: ALL_SPELLS })
  await apolloClient.query({ query: ALL_MONSTERS })
  await apolloClient.query({ query: ALL_EQUIPMENT })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  }
}
