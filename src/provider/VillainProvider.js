import React, { useState } from 'react'

export const VillainContext = React.createContext()

const VillainProvider = (props) => {

  const [firstName, setFirstName] = useState('Obadiah')
  const [lastName, setLastName] = useState('Stane')
  const [alias, setAlias] = useState('Iron Monger')
  const [email, setEmail] = useState('ironmonger@villain.com')

  return(
    <VillainContext.Provider value={{
      firstName,
      lastName,
      alias,
      email,
    }}>
      {props.children}
    </VillainContext.Provider>
  )
}

export default VillainProvider