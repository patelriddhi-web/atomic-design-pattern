import React from 'react'
import Typography from '../typography'
import './styles.scss'

export interface tagInterface {
  text: string;
}

const BestSeller = ({ text }: tagInterface) => {
  return (
    <div className="best">
      <Typography label={text} fontSize="smaller" tag="span" />
    </div>
  )
}

export default BestSeller
