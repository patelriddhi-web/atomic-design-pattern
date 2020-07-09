import * as React from 'react'
import './styles.scss'

export interface textBoxInterface {
  className: string;
  type: string;
}

const TextBox = ({ className, type, ...rest }: textBoxInterface) => {
  return <input {...rest} type={type} className={`text-box-wrapper ${className}`} />
}
export default TextBox
