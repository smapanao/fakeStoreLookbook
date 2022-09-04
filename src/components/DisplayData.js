import React from 'react'

const DisplayData = ({title, image, description, price,rating}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image}></img>
      <h5>{description}</h5>
      <h2>${price}</h2>
      <h2>Rating: {rating}/5</h2>

    </div>
  )
}

export default DisplayData
