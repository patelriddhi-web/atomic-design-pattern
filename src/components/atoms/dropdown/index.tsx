import React from 'react'
import './styles.scss'

export interface DropDownInterface {
  option: Array<string>;
  className?: string;
}

const DropDown = ({ option, className = '' }: DropDownInterface) => {
  return (
    <select className={className}>
      {option.map(item => {
        return <option value={item}>{item}</option>
      })}
    </select>
  )
}

export default DropDown
