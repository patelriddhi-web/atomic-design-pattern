import * as React from 'react'
import './styles.scss'
import Image from '../../atoms/images/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Typography from '../../atoms/typography/index'
import Rating from '../rating/index'

export interface cardInterface {
  desc: string;
  brand: string;
  price: string;
  rate: string;
  src: string;
}

const Card = ({ desc, brand, price, rate, src }: cardInterface) => {
  return (
    <div className="card-wrapper">
      <Image height="160px" width="160px" src={src} />
      <Typography label={desc} className="desc" fontSize="regular" fontColor="black" />
      <Typography label={brand} fontSize="smaller" tag="h2" fontColor="gray" className="brand" />
      <Typography label="₹" fontSize="smaller" tag="span" fontColor="black" className="rupee" />
      <Typography label={price} fontSize="large" tag="span" fontColor="black" className="price" />
      <Rating rate={rate} />
    </div>
  )
}

export default Card
