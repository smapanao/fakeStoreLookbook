import React from 'react'

const UpdateName = ({viewNameChange, onChange, onClick}) => {
  return (
    <div>
      {  viewNameChange ? (

      <div>  
      <button onClick={onClick}>Close Change Name</button>  
      <input type="text" placeholder='Change name' onChange={onChange}/>
      </div>) :
      <button onClick={onClick}>Change Name</button>}
    </div>
  )
}

export default UpdateName
