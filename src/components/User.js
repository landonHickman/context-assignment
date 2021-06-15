import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'
import { UserContext } from '../provider/UserProvider'
import { VillainContext } from '../provider/VillainProvider'

const User = () => {
  
  const {firstName, lastName, email, alias} = useContext(UserContext)
  const vill = useContext(VillainContext)

  return(
    <div style={{margin: '25px'}}>
      <Card>
        <Card.Content header={firstName+' '+lastName}/>
          <Card.Content  description={alias}/>
          <Card.Content extra>
        <Icon name='mail'/>{email}
        </Card.Content>
          <Card.Content extra>
        <Link to='/villains/profile'><Icon name='address book'/>Adversary: {vill.alias}</Link>
        </Card.Content>
      </Card>
    </div>
  )
}

export default User