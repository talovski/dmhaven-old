import React, { FC } from 'react'
import Desc from './Desc'
import { DescType } from './Desc'

export type ReactionsType = {
  desc?: DescType
}

type ReactionsProps = {
  reactions: ReactionsType
}

const Reactions: FC<ReactionsProps> = ({ reactions }) => (
  <div>
    <p>Reactions</p>
    {reactions.desc && <Desc desc={reactions.desc} />}
  </div>
)

export default Reactions
