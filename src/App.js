import React from 'react'

// Components
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'

// Context
import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
