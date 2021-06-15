import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Icon } from 'semantic-ui-react'
import { UserContext } from '../provider/UserProvider'
import { VillainContext } from '../provider/VillainProvider'

const Villain = () => {
 const {firstName, lastName, alias, power} = useContext(VillainContext)
 const user = useContext(UserContext)
  return (
    <div style={{margin: '25px'}}>
      <Container>
      <Card>
        <Card.Content header={firstName+' '+lastName}/>
          <Card.Content  description={alias}/>
          <Card.Content extra>
        <Icon name='superpowers'/>{power}
        </Card.Content>
        <Card.Content extra>
          <Link to='/users/profile'><Icon name='address book'/>Adversary: {user.alias}</Link>
        </Card.Content>
      </Card>
      </Container>
    </div>
  )
}

export default Villain