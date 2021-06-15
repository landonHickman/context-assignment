import React, { useContext, useState } from 'react'
import { Form } from 'semantic-ui-react'
import { UserContext } from '../provider/UserProvider'

const UserForm = (props) => {
  const {newUser} = props
  const user = useContext(UserContext)
  const [firstName, setFirstName] = useState(newUser ? newUser : user.firstName)
  const [lastName, setLastName] = useState(newUser ? newUser : user.lastName)
  const [alias, setAlias] = useState(newUser ? newUser : user.alias)
  const [email, setEmail] = useState(newUser ? newUser : user.email)


  const handleSubmit = (e) => {
    e.preventDefault()
    if(newUser){
      setFirstName(firstName)
      setLastName(lastName)
      setAlias(alias)
      setEmail(email)
      user.addHero({firstName: firstName, lastName: lastName, alias: alias, email: email})
    }else{
      user.setFirstName(firstName)
      user.setLastName(lastName)
      user.setAlias(alias)
      user.setEmail(email)
    }
    
  }
  return(
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input
        value={firstName}
        fluid
        label='First Name'
        type='text'
        onChange={(e, {value})=>setFirstName(value)}
        />
        <Form.Input
        value={lastName}
        fluid
        label='Last Name'
        type='text'
        onChange={(e, {value})=>setLastName(value)}
        />
        <Form.Input
        value={alias}
        fluid
        label='Alias'
        type='text'
        onChange={(e, {value})=>setAlias(value)}
        />
        <Form.Input
        value={email}
        fluid
        label='Email'
        type='text'
        onChange={(e, {value})=>setEmail(value)}
        />
      </Form.Group>
        <Form.Button color='blue'>Submit</Form.Button>    
    </Form>
    </>
  )
}

export default UserForm