import React from 'react'
import './styles.scss'
import Image from '../../atoms/images/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../../atoms/button/index'
import Typography from '../../atoms/typography'

const Pagination = () => {
  return (
    <div className="pagination-container">
      <Button className="btn">
        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
      </Button>
      <Typography
        className="text"
        label="Previous page"
        fontSize="regular"
        fontColor="gray"
        tag="div"
      />
      <div>
        <a href=""> 1 </a>
        <a href="">2...</a>
        <a>10</a>
      </div>
      {/* <Typography className="text" label="1 2 3 ... 400" fontColor="blue" tag="div" /> */}
      <Typography
        className="text"
        label="Next page"
        fontSize="regular"
        fontColor="gray"
        tag="div"
      />
      <Button className="btn">
        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
      </Button>
    </div>
  )
}

export default Pagination
