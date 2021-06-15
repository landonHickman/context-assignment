import React, { useState } from 'react'
import UserForm from './UserForm'

const AddUser = () => {
  const [newUser, setNewUser] = useState([])
  return(
    <>
      <UserForm newUser={newUser} setNewUser={setNewUser}/>
    </>
  )
}

export default AddUser