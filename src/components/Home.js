import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'
import { UserContext } from '../provider/UserProvider'

const Home = () => {
  const user = useContext(UserContext)
  console.log('user',user)
  
  const renderUsers = () => {
    //  return user.hero.map(u => {
       {console.log(user.hero)}
      return(
        <div>
          <Card>
            <Card.Content header={user.firstName+' '+user.lastName}/>
            <Card.Content  description={user.alias}/>
            <Card.Content extra>
              <Icon name='mail'/>{user.email}
            </Card.Content>
            <Card.Content extra>
              <Link to='/villains/profile'><Icon name='address book'/>Villains</Link>
            </Card.Content>
          </Card>
        </div>
      )
    // })
  }
    return (
      <div style={{margin: '25px'}}>
        {renderUsers()}
      </div>
    )
 
}

export default Home