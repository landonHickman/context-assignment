import React, { useState } from 'react'

export const VillainContext = React.createContext()

const VillainProvider = (props) => {

  const [firstName, setFirstName] = useState('Obadiah')
  const [lastName, setLastName] = useState('Stane')
  const [alias, setAlias] = useState('Iron Monger')
  const [power, setPower] = useState('Exoskeleton Armor')

  return(
    <VillainContext.Provider value={{
      firstName,
      lastName,
      alias,
      power,
      setFirstName,
      setLastName,
      setAlias,
      setPower,
    }}>
      {props.children}
    </VillainContext.Provider>
  )
}

export default VillainProvider