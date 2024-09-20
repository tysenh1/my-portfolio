import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Coding from './components/Coding'


function handleNavClick(id: string) {
  if (id == 'Coding') {
    console.log('Coding yo')
    document.getElementById('main-content-container').innerHTML = <Coding />
  } else if (id == 'Guitar') {
    console.log('Gutiar yo')
  } else if (id == 'Other') {
    console.log('A secret third thing yo')
  } else {
    console.log('no idea how you got here fam')
  }
}

function App() {


  return (
    <body>
      <header className='header'>
        <h1 className='website-title'>My Portfolio</h1>
        <nav className='navbar'>
          <ul className='navbar-list'>
            <li className='navbar-item'><button onClick={(() => handleNavClick('Coding'))}>Thing 1</button></li>
            <li className='navbar-item'><button onClick={(() => handleNavClick('Guitar'))}>Thing 2</button></li>
            <li className='navbar-item'><button onClick={(() => handleNavClick('Other'))}>Thing 3</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <div id='main-content-container'>

        </div>
      </main>
    </body>
  )
}


export default App
