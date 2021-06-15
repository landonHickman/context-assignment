import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { UserContext } from '../provider/UserProvider'
import { VillainContext } from '../provider/VillainProvider'

const Home = () => {
  const user = useContext(UserContext)
  const vill = useContext(VillainContext)
  
  const renderUsers = () => {
     return user.heros.map(u => {
      return(
        <C key={u.email}>
          <Card>
            <Card.Content header={u.firstName+' '+u.lastName}/>
            <Card.Content  description={u.alias}/>
            <Card.Content extra>
              <Icon name='mail'/>{u.email}
            </Card.Content>
            <Card.Content extra>
            <Link to='/villains/profile'><Icon name='address book'/>Adversary: {vill.alias}</Link>
            </Card.Content>
          </Card>
        </C>
      )
    })
  }
    return (
      <div style={{margin: '25px'}}>
        {renderUsers()}
      </div>
    )
 
}

const C = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`
export default Home