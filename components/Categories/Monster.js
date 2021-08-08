import React from "react"
import Name from "../Properties/Name"
import ChallengeRating from "../Properties/ChallengeRating"
import HitPoints from "../Properties/HitPoints"
import HitDice from "../Properties/HitDice"
import Reactions from "../Properties/Reactions"

const Monster = ({ monster }) => {
  return (
    <div className="max-w-prose md:w-full">
      <Name name={monster.name} />
      {monster.challenge_rating && <ChallengeRating challengeRating={monster.challenge_rating}/>}
      {monster.hit_points       && <HitPoints hitPoints={monster.hit_points} />}
      {monster.hit_dice         && <HitDice hitDice={monster.hit_dice} />}
      {monster.reactions        && <Reactions reactions={monster.reactions} />}
    </div>
  )
}

export default Monster