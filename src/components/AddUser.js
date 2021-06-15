import React, { useState } from 'react'
import UserForm from './UserForm'

const AddUser = () => {
  const [newUser, setNewUser] = useState([])
  return(
    <>
      <UserForm newUser={newUser}/>
    </>
  )
}

export default AddUser