import React from 'react'
import './styles.scss'
import Image from '../../atoms/images/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../../atoms/button/index'
import Typography from '../../atoms/typography'
import ReactPaginate from 'react-paginate'

export interface paginateInterface {
  totalPage: number;
}

const Pagination = ({ totalPage }: paginateInterface) => {
  return (
    <div className="pagination-container">
      <Button className="btn">
        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
      </Button>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName={'pagination'}
        activeClassName={'active'}
        initialPage={0}
        disabledClassName={'disabled'}
        nextLinkClassName={'next'}
      />
      <Button className="btn">
        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
      </Button>
    </div>
  )
}

export default Pagination
