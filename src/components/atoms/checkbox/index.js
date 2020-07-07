import React from 'react'
import './styles.scss'

const CheckBox = ({ values }) => {
  return (
    <div className="checkbox-wrapper">
      {values.map(item => {
        return (
          <div className="tag">
            <input type="checkbox" value={item} className="space" />
            <label>{item}</label>
          </div>
        )
      })}
    </div>
  )
}

export default CheckBox
