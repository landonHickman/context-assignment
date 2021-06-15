import React, {useState} from 'react'

export const UserContext = React.createContext()

//dont think ill need this
export const UserConsumer = UserContext.Consumer


const UserProvider = (props) => {
  const [heros, setHeros] = useState([{
    firstName: 'Bruce',
    lastName: 'Banner',
    alias: 'The Hulk',
    email: 'thehulk@avengers.com',
  },
  {
    firstName: 'Tony',
    lastName: 'Stark',
    alias: 'Iron Man',
    email: 'ironman@avengers.com',
  },])
  const [firstName, setFirstName] = useState('Tony')
  const [lastName, setLastName] = useState('Stark')
  const [alias, setAlias] = useState('Iron Man')
  const [email, setEmail] = useState('ironman@avengers.com')

  const addHero = (h) => {
    let newHero = [...heros, h]
    setHeros(newHero)
  }
  return(
    <UserContext.Provider value={{
      heros,
      alias,
      firstName,
      lastName,
      email,
      setFirstName,
      setLastName,
      setAlias,
      setEmail,
      addHero,
      
    }}>
      {props.children}
    </UserContext.Provider>
  )

}
export default UserProvider