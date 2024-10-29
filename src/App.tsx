import { useState } from 'react'
import './index.css'
import Coding from './components/Coding'
import Guitar from './components/Guitar'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Test from './components/test'
import { motion } from 'framer-motion'


function App() {

  const [pageContent, setPageContent] = useState('home')

  function handleNavClick(id: string) {
    setPageContent(id)
  }



  return (
    <>
      <header className='header'>
        <motion.nav className='flex w-full h-24 border-gray-500 border-b-2 bg-background/50 fixed backdrop-blur-sm z-50 -top-24' animate={{ y: 96 }} transition={{ duration: 0.5, ease: 'easeOut',delay: 0.25}}>
          <div id='welcome-message' className='absolute right-0 left-0 top-8 w-fit m-auto'>
            <p className='font-normal text-3xl text-white font-robotoMono'>Welcome to My Portfolio!</p>
          </div>
          <div className='w-full flex justify-end items-center'>
            <a href='youtube.com' className='mx-4 flex w-34 h-11 items-center justify-center bg-[#007bb6] rounded-lg'>
              <img src='src/assets/linked-in-white.png' className='h-7'></img>
            </a>
            <a href='https://github.com/tysenh1' className='mx-4 flex w-34 h-11 items-center justify-center bg-black rounded-lg'>
                {/* <img className='h-7 w-7 my-2 ml-2 mr-1' src='src/assets/github-mark-white.svg'></img> */}
                <img className='h-7 w-7 mr-1' src='src/assets/github-mark-white.svg'></img>
                {/* <img className='my-2 mr-2 ml-1 h-7' src='src/assets/GitHub_Logo_White.png'></img> */}
                <img className='h-7 ml-1' src='src/assets/GitHub_Logo_White.png'></img>
            </a>
          </div>
          
          
        </motion.nav>
      </header>

      <main className='h-auto'>
        <div id='main-content-container' className='relative bg[#121528] pt-portfolio-header'>
          
          <Home />
          {
            pageContent == 'aboutme' ? <AboutMe />
            : pageContent == 'coding' ? <Coding />
            : pageContent == 'guitar' ? <Guitar />
            : <></>
          }
        </div>
      </main>
    </>
  )
}


export default App
