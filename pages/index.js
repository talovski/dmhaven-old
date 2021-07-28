import axios from 'axios'
import { useEffect, useState } from 'react'
import ItemInfo from '../components/ItemInfo'
import Search from '../components/Search'

export default function Home() {
  const [items, setItems] = useState([])
  const baseUrl = 'https://www.dnd5eapi.co'

  useEffect(() => {
    axios.get(`${baseUrl}/api/spells`).then((response) => {
      setItems(response.data.results)
    })
  }, [])

  const tenItems = items.splice(0, 10)
  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold">D&D Spells</h1>
      <Search baseUrl={baseUrl} />
      <div>
        <p>type shit to get shit </p>
        {}
        {tenItems.map((item) => (
          <div>
            <ItemInfo baseUrl={baseUrl} item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
