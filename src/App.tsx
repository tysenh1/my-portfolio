import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
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
    <>
      <header className='header'>
        <nav className='flex w-full bg-gray-300 h-24'>
          <div id='welcome-message' className='absolute right-0 left-0 top-6 w-fit m-auto'>
            <p className='font-thin text-3xl'>Welcome to My Portfolio</p>
          </div>
          <div className='w-full flex justify-end items-center'>
            <a href='youtube.com' className='mx-4'>LinkedIn</a>
            <a href='https://github.com/tysenh1' className='mx-4 inline-flex'>
              <div>
                <svg className='h-8 w-8'>
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                </svg>
                <p>GitHub</p>
              </div>
            </a>
          </div>
          
          {/* <ul className='navbar-list'>
            <li className='navbar-item'><button onClick={(() => handleNavClick('coding'))}>Thing 1</button></li>
            <li className='navbar-item'><button onClick={(() => handleNavClick('guitar'))}>Thing 2</button></li>
            <li className='navbar-item'><button onClick={(() => handleNavClick('other'))}>Thing 3</button></li>
          </ul> */}
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
    </>
  )
}


export default App
