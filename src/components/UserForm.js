import React, { useContext, useState } from 'react'
import { Form } from 'semantic-ui-react'
import { UserContext } from '../provider/UserProvider'

const UserForm = (props) => {
  const {newUser} = props
  const user = useContext(UserContext)
  const [firstName, setFirstName] = useState(newUser ? newUser : user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [alias, setAlias] = useState(user.alias)
  const [email, setEmail] = useState(user.email)

  console.log('First Name',user.firstName)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(newUser){
      //doesn't really work... probably need to store everything about my user in an array
      // i.e. user = [ { firstName: bruce, ....}]
      user.addFirstName(firstName)
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
        <Form.Button>Submit</Form.Button>    
    </Form>
    </>
  )
}

export default UserForm