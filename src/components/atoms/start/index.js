import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

const Star = ({ color }) => {
  return (
    <span className={color}>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
    </span>
  )
}

export default Star
