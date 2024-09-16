import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Coding from './components/Coding'

function App() {


  return (
    <body>
      <header className='header'>
        <h1 className='website-title'>Welcome to my Portfolio!</h1>
        <nav className='navbar'>
          <ul className='navbar-list'>
            <li className='navbar-item'><a className='navbar-link'>Thing 1</a></li>
            <li className='navbar-item'><a className='navbar-link'>Thing 2</a></li>
            <li className='navbar-item'><a className='navbar-link'>Thing 3</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Coding />
      </main>
    </body>
  )
}


export default App
