/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import './style.scss'

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}


const Button = ({type,height, width, onClick, children, text, icon, className, disabled}) => {
  console.log(text)
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className} height={height} width={width}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Button
