import React from 'react'
import './styles.scss'
import Typography from '../../atoms/typography/index'
import Image from '../../atoms/images/index'
import Rating from '../rating/index'

export interface bestSellerInterface {
  src: string;
  desc: string;
  rate: string;
  price: string;
  edition: string;
}

const BestSellerCard = ({ src, desc, rate, price, edition }: bestSellerInterface) => {
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
