import React from 'react'
import './styles.scss'
import Typography from '../../atoms/typography'
import Image from '../../atoms/images/index'
import Rating from '../rating/index'

const BestSellerCard = ({ src, desc, rate, price, edition }) => {
  return (
    <div className="bestseller">
      <Image src={src} height="135px" width="88px" />
      <Typography label={desc} fontSize="regular" fontColor="blue" tag="div" />
      <Rating rate={rate} />
      <Typography label={edition} fontColor="black" fontSize="smaller" tag="div" />
      <Typography label={price} fontColor="brown" fontSize="regular" tag="div" />
    </div>
  )
}

export default BestSellerCard
