import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Icon } from 'semantic-ui-react'
import { UserContext } from '../provider/UserProvider'

const User = () => {
  
  const {firstName, lastName, email, alias} = useContext(UserContext)

  return(
    <div style={{margin: '25px'}}>
      <Container>
      <Card>
        <Card.Content header={firstName+' '+lastName}/>
          <Card.Content  description={alias}/>
          <Card.Content extra>
        <Icon name='mail'/>{email}
        </Card.Content>
          <Card.Content extra>
        <Link to='/villains/profile'><Icon name='address book'/>Villains</Link>
        </Card.Content>
      </Card>
      </Container>
    </div>
  )
}

export default User