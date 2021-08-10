import React, { FC } from 'react'

export type RangeType = {
  long: number
  normal: number
}
type RangeProps = {
  range: RangeType
}

const Range: FC<RangeProps> = ({ range }) => (
  <div>
    {range.long && <p>Long range — {range.long}</p>}
    {range.normal && <p>Normal range — {range.normal}</p>}
  </div>
)

export default Range
