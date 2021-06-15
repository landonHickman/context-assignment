import React, {useState} from 'react'

export const UserContext = React.createContext()

//dont think ill need this
export const UserConsumer = UserContext.Consumer

let heros = [
  {
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
  },
]

const UserProvider = (props) => {
  const [hero, setHero] = useState([])
  const [firstName, setFirstName] = useState('Tony')
  const [lastName, setLastName] = useState('Stark')
  const [alias, setAlias] = useState('Iron Man')
  const [email, setEmail] = useState('ironman@avengers.com')

  const addHero = (h) => {
    let newHero = [...hero, h]
    setHero(newHero)
  }
  return(
    <UserContext.Provider value={{
      hero,
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