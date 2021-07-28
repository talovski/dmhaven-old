import { useEffect, useState } from 'react'
import axios from 'axios'
import DamageInfo from './DamageInfo'
import Description from './Description'

const ItemInfo = ({ item, baseUrl }) => {
  const url = `${baseUrl}${item.url}`
  const [itemFullDesc, setItemFullDesc] = useState({})
  console.log(itemFullDesc)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setItemFullDesc(response.data)
      })
      .catch((error) => console.error(error))
  }, [])

  function description(obj) {
    if (obj.hasOwnProperty('desc')) return <Description item={obj} />
  }

  function damage(obj) {
    if (obj.hasOwnProperty('damage')) {
      return <DamageInfo item={obj.damage} />
    }
  }

  function castingTime(obj) {
    if (obj.hasOwnProperty('casting_time')) {
      return <p>Casting time: {obj.casting_time}</p>
    }
  }

  return (
    <div className="border-2 rounded-xl p-4 m-4 shadow-sm text-sm">
      <div className="font-bold">{itemFullDesc.name}</div>
      {/* <div className="w-max-prose">{itemFullDesc.damage.damage_type}</div> */}
      <div>
        {castingTime(itemFullDesc)}
        <div>{description(itemFullDesc)}</div>
        <div>{damage(itemFullDesc)}</div>
      </div>
    </div>
  )
}

export default ItemInfo
