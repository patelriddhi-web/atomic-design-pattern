import React from 'react'
import './styles.scss'
import ReactStars from 'react-rating-stars-component'

export interface rateInterface {
  rate: string;
}

const Rating = ({ rate }: rateInterface) => {
  return (
    <ReactStars
      count={5}
      size={24}
      value={rate}
      half={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      color2={'#ffd700'}
    />
  )
}

export default Rating
