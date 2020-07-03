import React from 'react'
import './styles.scss'
import Typography from '../../atoms/typography'
import BestSeller from '../../atoms/bestseller/index'
import Image from '../../atoms/images/index'
import Rating from '../rating'

const CardDesc = ({ src, heading, dateText, by, store, price, bestSeller, rate }) => {
  return (
    <div className="descWrapper">
      <div className="seller-tag">{bestSeller ? <BestSeller text="Best Seller" /> : null}</div>
      <div className="desc">
        <Image src={src} height="250px" width="300px" />
        <div className="content">
          <Typography
            className="heading"
            label={heading}
            tag="span"
            fontColor="blue"
            fontSize="mid"
          />
          <Typography
            className="date"
            label={dateText}
            tag="span"
            fontSize="smaller"
            fontColor="black"
          />
          <Typography className="by" label={by} tag="div" fontSize="smaller" fontColor="black" />
          <div className="rate-content">
            <div className="price-store">
              <Typography
                className="storeName"
                label={store}
                tag="div"
                fontSize="smaller"
                fontColor="blue"
              />
              <Typography
                className="price"
                label={price}
                tag="div"
                fontSize="small"
                fontColor="brown"
                fontWeight="semiBold"
              />
            </div>
            <div className="rate">
              <Rating rate={rate} />
            </div>
          </div>
          <Typography
            className="detail"
            label="Availabel for download now"
            fontSize="smaller"
            fontColor="black"
            tag="div"
          />
        </div>
      </div>
    </div>
  )
}

export default CardDesc
