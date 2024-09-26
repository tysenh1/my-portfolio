import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Coding from './components/Coding'
import Guitar from './components/Guitar'
import Test from './components/test'
import Home from './components/Home'


// function handleNavClick(id: string) {
//   if (id == 'Coding') {
//     console.log('Coding yo')
//     // document.getElementById('main-content-container').innerHTML = <Coding />
//     document.getElementById('test').innerHTML = 'shitass' 
//   } else if (id == 'Guitar') {
//     console.log('Gutiar yo')
//     document.getElementById('test').innerHTML = 'Not shitass'
//   } else if (id == 'Other') {
//     console.log('A secret third thing yo')
//   } else {
//     console.log('no idea how you got here fam')
//     document.getElementById('test').innerHTML = <Test />
//   }
// }


function App() {

  const [pageContent, setPageContent] = useState('home')

  function handleNavClick(id: string) {
    console.log(id)
    setPageContent(id)
  }



  return (
    <body>
      <header className='header'>
        <h1 className='website-title'>My Portfolio</h1>
        <nav className='navbar'>
          <ul className='navbar-list'>
            <li className='navbar-item'><button onClick={(() => handleNavClick('coding'))}>Thing 1</button></li>
            <li className='navbar-item'><button onClick={(() => handleNavClick('guitar'))}>Thing 2</button></li>
            <li className='navbar-item'><button onClick={(() => handleNavClick('other'))}>Thing 3</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <div id='main-content-container'>
          {
            pageContent == 'coding' ? <Coding />
            : pageContent == 'guitar' ? <Guitar />
            : pageContent == 'other' ? <Test />
            : <Home />
          }
        </div>
      </main>
    </body>
  )
}


export default App
