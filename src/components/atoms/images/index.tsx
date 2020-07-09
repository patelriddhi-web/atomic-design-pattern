import * as React from 'react'

export interface imageInterface {
  src: string;
  height: string;
  width: string;
  className?: string;
}

const Image = ({ height, width, src, className }: imageInterface) => {
  return <img height={height} width={width} src={src} className={className}></img>
}

export default Image
