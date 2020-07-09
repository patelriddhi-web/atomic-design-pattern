/* @flow */
import * as React from 'react'

import './style.scss'

export type buttonType = 'reset' | 'submit' | 'button'

export interface ButtonInterface {
  children?: React.ReactNode
  className?: string;
  type?: buttonType;
  disabled?: boolean;
  onClick?: () => void;


}


const Button = ({ type, disabled, children, className, onClick}: ButtonInterface) => {
  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
