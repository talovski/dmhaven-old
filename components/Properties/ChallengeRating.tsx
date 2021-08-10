import React, { FC } from 'react'

export type ChallengeRatingType = number
type ChallengeRatingProps = {
  challengeRating: ChallengeRatingType
}

const ChallengeRating: FC<ChallengeRatingProps> = ({ challengeRating }) => (
  <div>
    <p>Challenge Rating: {challengeRating}</p>
  </div>
)

export default ChallengeRating
