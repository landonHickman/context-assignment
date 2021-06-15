import React, { useContext, useState } from 'react'
import { Form } from 'semantic-ui-react'
import { VillainContext } from '../provider/VillainProvider'

const VillainForm = () => {

  const villain = useContext(VillainContext)
  const [firstName, setFirstName] = useState(villain.firstName)
  const [lastName, setLastName] = useState(villain.lastName)
  const [alias, setAlias] = useState(villain.alias)
  const [power, setPower] = useState(villain.power)
  
  const handleSubmit = (e ) => {
    e.preventDefault()
    villain.setFirstName(firstName)
    villain.setLastName(lastName)
    villain.setAlias(alias)
    villain.setPower(power)
  }
  return (
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
        value={power}
        fluid
        label='Power'
        type='text'
        onChange={(e, {value})=>setPower(value)}
        />
      </Form.Group>
        <Form.Button>Submit</Form.Button>    
    </Form>
    </>
  )
}

export default VillainForm