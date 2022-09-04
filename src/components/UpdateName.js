import React from 'react'

const UpdateName = ({viewNameChange, onChange, onClick,name}) => {
  return (
    <div>
      {  viewNameChange ? (

      <div>  
      <button onClick={onClick}>Close Change Name</button>  
      <input type="text" placeholder='Change name' onChange={onChange} value={name}/>
      </div>) :
      <button onClick={onClick}>Change Name</button>}
    </div>
  )
}

export default UpdateName
