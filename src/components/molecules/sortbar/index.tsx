import React from 'react'
import './styles.scss'
import Typography from '../../atoms/typography'
import DropDown from '../../atoms/dropdown'
import { options } from '../../constants'

const SortBar = () => {
  return (
    <div className="sort-bar-wrapper">
      <div className="left-content">
        <Typography
          label="1-16 of over 90,000 results for"
          tag="span"
          fontSize="regular"
          fontColor="black"
        ></Typography>
        <Typography label="Kindle Store" tag="span" fontSize="regular" fontColor="mango" />
      </div>
      <div className="right-content">
        <Typography label="Sort by" fontSize="regular" fontColor="black" tag="span" />
        <DropDown option={options} />
      </div>
    </div>
  )
}

export default SortBar
