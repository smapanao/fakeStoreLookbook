import React from 'react'

const ChangeNum = ({num, incNum, decNum}) => {

  return (
    <div>
      <h5>Item: {num}</h5>
      <button onClick={decNum}>Previous</button>
      <button onClick={incNum}>Next</button>
    </div>
  )
}

export default ChangeNum
