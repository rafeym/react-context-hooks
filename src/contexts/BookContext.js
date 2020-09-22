import React, { createContext, useState } from 'react'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Sea monster adventures', id: 1 },
    { title: 'Harry Potter Vol.1', id: 2 },
    { title: 'Biography of Pop Smoke', id: 3 },
    { title: 'How to tame a dragon', id: 4 },
  ])

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
