import React, { FC } from 'react'
import Name, { NameType } from '../Properties/Name'
import ChallengeRating, {
  ChallengeRatingType
} from '../Properties/ChallengeRating'
import HitPoints, { HitPointsType } from '../Properties/HitPoints'
import HitDice, { HitDiceType } from '../Properties/HitDice'
import Reactions, { ReactionsType } from '../Properties/Reactions'

export type MonsterType = {
  name: NameType
  challenge_rating: ChallengeRatingType
  hit_points: HitPointsType
  hit_dice: HitDiceType
  reactions: ReactionsType
}

type MonsterProps = {
  monster: MonsterType
}

const Monster: FC<MonsterProps> = ({ monster }) => (
  <div className="border-2 rounded-lg my-2 mr-2 px-2 py-4">
    <Name name={monster.name} />
    {monster.challenge_rating && (
      <ChallengeRating challengeRating={monster.challenge_rating} />
    )}
    {monster.hit_points && <HitPoints hitPoints={monster.hit_points} />}
    {monster.hit_dice && <HitDice hitDice={monster.hit_dice} />}
    {monster.reactions && <Reactions reactions={monster.reactions} />}
  </div>
)

export default Monster
