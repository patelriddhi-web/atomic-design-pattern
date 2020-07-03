import React from 'react'
import BestSellerCard from '../../molecules/bestSellerCard'
import './styles.scss'
import Typography from '../../atoms/typography'

const MoreItems = () => {
  return (
    <div className="section">
      <div className="more-items">
        <Typography
          label="More items to explore"
          fontSize="large"
          fontWeight="semiBold"
          tag="p"
          fontColor="black"
        />
        <div className="last-section">
          <BestSellerCard
            src="https://images-eu.ssl-images-amazon.com/images/I/81pizczA5nL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR176,270_.jpg"
            desc="The Nameless Relationship
                Preeti Shenoy"
            price="₹26.5"
            edition="Kindle Edition"
            rate="2"
          />
          <BestSellerCard
            src="https://images-eu.ssl-images-amazon.com/images/I/81pizczA5nL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR176,270_.jpg"
            desc="The Nameless Relationship
                Preeti Shenoy"
            price="₹26.5"
            edition="Kindle Edition"
            rate="2.5"
          />
          <BestSellerCard
            src="https://images-eu.ssl-images-amazon.com/images/I/81pizczA5nL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR176,270_.jpg"
            desc="The Nameless Relationship
                Preeti Shenoy"
            price="₹26.5"
            edition="Kindle Edition"
            rate="5"
          />
          <BestSellerCard
            src="https://images-eu.ssl-images-amazon.com/images/I/81pizczA5nL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR176,270_.jpg"
            desc="The Nameless Relationship
                Preeti Shenoy"
            price="₹26.5"
            edition="Kindle Edition"
            rate="3"
          />
        </div>
      </div>
      <div className="best-seller">
        <Typography
          label="Bestsellers in Kindle eBooks"
          fontSize="large"
          fontWeight="semiBold"
          tag="p"
          fontColor="black"
        />
        <div className="last-section">
          <BestSellerCard
            src="https://images-eu.ssl-images-amazon.com/images/I/81pizczA5nL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR176,270_.jpg"
            desc="The Nameless Relationship
                Preeti Shenoy"
            price="₹26.5"
            edition="Kindle Edition"
            rate="1.5"
          />
          <BestSellerCard
            src="https://images-eu.ssl-images-amazon.com/images/I/81pizczA5nL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR176,270_.jpg"
            desc="The Nameless Relationship
                Preeti Shenoy"
            price="₹26.5"
            edition="Kindle Edition"
            rate="2"
          />
          <BestSellerCard
            src="https://images-eu.ssl-images-amazon.com/images/I/81pizczA5nL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR176,270_.jpg"
            desc="The Nameless Relationship
                Preeti Shenoy"
            price="₹26.5"
            edition="Kindle Edition"
            rating="2"
          />
          <BestSellerCard
            src="https://images-eu.ssl-images-amazon.com/images/I/81pizczA5nL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR176,270_.jpg"
            desc="The Nameless Relationship
                Preeti Shenoy"
            price="₹26.5"
            edition="Kindle Edition"
            rate="5"
          />
        </div>
      </div>
    </div>
  )
}

export default MoreItems
