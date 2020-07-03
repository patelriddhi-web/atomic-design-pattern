import * as React from 'react'
import './styles.scss'

const TextBox = ({className, onChange, type}) => {
return(
    <input type={type} onChange={onChange} className={`text-box-wrapper ${className}`}/>
)

}
export default TextBox