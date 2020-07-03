import React from 'react'
import './styles.scss'
import Star from '../../atoms/start/index'
import ReactStars from 'react-rating-stars-component'

const Rating = ({ rate }) => {
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
