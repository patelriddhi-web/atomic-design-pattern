import * as React from 'react'

const Image = ({height, width, src}) => {
    return (
        <img height={height} width={width} src={src}></img>
    )
}

export default Image