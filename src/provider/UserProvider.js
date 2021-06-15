import React, {useState} from 'react'

export const UserContext = React.createContext()

//dont think ill need this
export const UserConsumer = UserContext.Consumer

let hero = [
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
  const [firstName, setFirstName] = useState('Tony')
  const [lastName, setLastName] = useState('Stark')
  const [alias, setAlias] = useState('Iron Man')
  const [email, setEmail] = useState('ironman@avengers.com')

  const addFirstName = (user) => {
    let newFirstName = [...firstName, user]
    setFirstName(newFirstName)
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
      addFirstName,
      
    }}>
      {props.children}
    </UserContext.Provider>
  )

}
export default UserProvider