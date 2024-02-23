import React, { createContext, useState } from 'react'

export const addBookResponseContext = createContext()
export const addEditResponseContext = createContext()

function ContextShare({children}) {

    const [editBookResponse,setEditBookResponse] = useState("")
    const [addBookResponse,setAddBookResponse] = useState("")

  return (
    <>
        <addBookResponseContext.Provider value={{addBookResponse,setAddBookResponse}}>
          <addEditResponseContext.Provider value={{editBookResponse,setEditBookResponse}}>
            {children}
          </addEditResponseContext.Provider>
        </addBookResponseContext.Provider>
        
    </>
  )
}

export default ContextShare