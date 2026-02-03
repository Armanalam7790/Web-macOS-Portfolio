import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'

const App = () => {
  return (
   <main>
    <Nav />
    <Dock />
    <MacWindow >
      <h1>portfolio in progress</h1>
    </MacWindow>
   </main>
  )
}

export default App