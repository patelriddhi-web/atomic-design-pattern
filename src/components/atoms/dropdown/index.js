import React from 'react'
import './styles.scss'

const DropDown = ({ option, className = '' }) => {
  return (
    <select className={className}>
      {option.map(item => {
        return <option value={item}>{item}</option>
      })}
    </select>
  )
}

export default DropDown
