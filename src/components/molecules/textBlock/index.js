import * as React from 'react'
import './styles.scss'
import Typography from '../../atoms/typography'

const TextBlock = ({ upText, downText }) => {
  return (
    <div className="block">
      <Typography
        label={upText}
        className="upper"
        fontSize="smaller"
        fontColor="light-gray"
        tag="span"
      ></Typography>
      <Typography
        label={downText}
        className="down"
        fontSize="small"
        fontWeight="semiBold"
        tag="span"
      ></Typography>
    </div>
  )
}

export default TextBlock
