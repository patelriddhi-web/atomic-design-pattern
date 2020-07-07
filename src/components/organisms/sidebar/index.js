import React from 'react'
import './styles.scss'
import Typography from '../../atoms/typography'
import { kindleValues, primeValues, worsWiseValues } from '../../constants'
import CheckBox from '../../atoms/checkbox'
import Rating from '../../molecules/rating'
import TextBox from '../../atoms/textbox/index'
import Button from '../../atoms/button/index'

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <Typography
        label="Show results for"
        fontColor="darkGray"
        fontSize="mid"
        tag="h3"
        fontWeight="bitBold"
      />
      <Typography
        label="Kindle Store"
        fontColor="black"
        fontSize="small"
        tag="h3"
        fontWeight="semiBold"
        className="kindleStore"
      />
      <Typography
        label="Kindle eBooks"
        fontColor="black"
        fontSize="small"
        tag="span"
        className="ebooks"
      />
      <hr className="line" />
      <Typography
        label="Refine By"
        fontColor="darkGray"
        fontSize="mid"
        tag="h3"
        fontWeight="bitBold"
      />
      <Typography
        label="New Arrivals"
        fontColor="black"
        fontSize="small"
        tag="h3"
        fontWeight="semiBold"
        className="kindleStore"
      />
      <ul className="arrivals">
        <li>
          {' '}
          <Typography
            label="Last 30 days"
            fontColor="black"
            fontSize="small"
            tag="span"
            className="ebooks"
          />
        </li>
        <li>
          {' '}
          <Typography
            label="Last 60 days"
            fontColor="black"
            fontSize="small"
            tag="span"
            className="ebooks"
          />
        </li>
        <li>
          {' '}
          <Typography
            label="Coming Soon"
            fontColor="black"
            fontSize="small"
            tag="span"
            className="ebooks"
          />
        </li>
      </ul>
      <div>
        <Typography
          label="Kindle Unlimited"
          fontColor="black"
          fontSize="small"
          tag="h3"
          fontWeight="semiBold"
          className="kindleStore"
        />
        <CheckBox className="checkbox" values={kindleValues} />
      </div>
      <div>
        <Typography
          label="Pirme Reading"
          fontColor="black"
          fontSize="small"
          tag="h3"
          fontWeight="semiBold"
          className="kindleStore"
        />
        <CheckBox className="checkbox" values={kindleValues} />
      </div>
      <div>
        <Typography
          label="Word wise"
          fontColor="black"
          fontSize="small"
          tag="h3"
          fontWeight="semiBold"
          className="kindleStore"
        />
        <CheckBox className="checkbox" values={kindleValues} />
      </div>
      <div className="review">
        <Typography
          label="Avg. customer Review"
          fontColor="black"
          fontSize="small"
          tag="h3"
          fontWeight="semiBold"
          className="kindleStore"
        />
        <Rating rate={4} />
        <Rating rate={3} />
        <Rating rate={2} />
        <Rating rate={1} />
      </div>
      <div className="price-section">
        <Typography
          label="Price"
          fontColor="black"
          fontSize="small"
          tag="h3"
          fontWeight="semiBold"
          className="kindleStore"
        />
        <Typography
          label="Under ₹50"
          fontColor="black"
          fontSize="small"
          tag="span"
          className="ebooks"
        />{' '}
        <Typography
          label="₹50 - 100"
          fontColor="black"
          fontSize="small"
          tag="span"
          className="ebooks"
        />{' '}
        <Typography
          label="₹100 - 200"
          fontColor="black"
          fontSize="small"
          tag="span"
          className="ebooks"
        />{' '}
        <Typography
          label="₹200 - 500"
          fontColor="black"
          fontSize="small"
          tag="span"
          className="ebooks"
        />
        {/* <div>
          <TextBox type="text" placeholder="₹ Min" />
          <TextBox type="text" placeholder="₹ Max" />
          <Button text="Go" />
        </div> */}
      </div>
      <div className="deal">
        <Typography
          label="Deals"
          fontColor="black"
          fontSize="small"
          tag="h3"
          fontWeight="semiBold"
          className="kindleStore"
        />
        <CheckBox className="checkbox" values={kindleValues} />
      </div>
      <div className="discount">
        <Typography
          label="Discount"
          fontColor="black"
          fontSize="small"
          tag="h3"
          fontWeight="semiBold"
          className="kindleStore"
        />
        <Typography
          label="10% Off or more"
          fontColor="black"
          fontSize="small"
          tag="span"
          className="ebooks"
        />
        <Typography
          label="25% Off or more"
          fontColor="black"
          fontSize="small"
          tag="span"
          className="ebooks"
        />
        <Typography
          label="35% Off or more"
          fontColor="black"
          fontSize="small"
          tag="span"
          className="ebooks"
        />
        <Typography
          label="50% Off or more"
          fontColor="black"
          fontSize="small"
          tag="span"
          className="ebooks"
        />
      </div>
    </div>
  )
}

export default SideBar
