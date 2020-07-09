import React from 'react'
import './styles.scss'

export interface checkBoxInterface {
  values: Array<string>;
  className?: string;
}

const CheckBox = ({ values, className }: checkBoxInterface) => {
  return (
    <div className="checkbox-wrapper">
      {values.map(item => {
        return (
          <div className={`tag ${className}`}>
            <input type="checkbox" value={item} className="space" />
            <label>{item}</label>
          </div>
        )
      })}
    </div>
  )
}

export default CheckBox
