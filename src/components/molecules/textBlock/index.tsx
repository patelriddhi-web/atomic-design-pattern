import * as React from 'react'
import './styles.scss'
import Typography from '../../atoms/typography'

export interface textBlockInterface {
  upText: string;
  downText: string;
}

const TextBlock = ({ upText, downText }: textBlockInterface) => {
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
