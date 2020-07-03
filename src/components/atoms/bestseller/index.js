import React from 'react'
import Typography from '../typography'
import './styles.scss'

const BestSeller = ({ text }) => {
  return (
    <div className="best">
      <Typography label={text} fontSize="smaller" tag="span" />
    </div>
  )
}

export default BestSeller
