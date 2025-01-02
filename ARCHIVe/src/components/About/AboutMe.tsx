import { useState, useEffect } from "react"
import Resume from "./Resume/Resume"
import CoverLetter from "./CoverLetter"
import Interview from "./Interview/Interview"
import { AnimatePresence, motion } from "framer-motion"
import { SlideLeftButton, SlideRightButton } from "./SlideButton"

// @ts-ignore
function AboutMe() {

  const [slideCounter, setSlideCounter] = useState(0)
  const [slideState, setSlideState] = useState('right')
  const [slideInitial, setSlideInitial] = useState({ opacity: 0, x: 100 })
  const [slideExit, setSlideExit] = useState({ opacity: 0, x: -100 })


  function handleLeftClick(slideCounter: number) {
    slideCounter == 0 ? setSlideCounter(2) : setSlideCounter(slideCounter-1)
  }

  function handleRightClick(slideCounter: number) {
    slideCounter == 2 ? setSlideCounter(0) : setSlideCounter(slideCounter+1)
  }

  useEffect(() => {
    if (slideState == 'right') {
      setSlideInitial({ opacity: 0, x: 100 })
      setSlideExit({ opacity: 0, x: -100})
    } else {
      setSlideInitial({ opacity: 0, x: -100 })
      setSlideExit({ opacity: 0, x: 100 })
    }
    
  }, [slideState])

  // TODO This animation is scuffed as but it works and that is all that matter right now
  // useEffect(() => {window.scrollTo({ top: 700, behavior: 'smooth' })}, [])

  return (
    <>
      <div className="relative w-full h-auto mt-48 mb-12" id="aboutme">
        <div className="relative w-full flex justify-center mt-4">
          <div onMouseEnter={() => setSlideState('left')} className="mx-auto mb-12">
            <SlideLeftButton handleClick={handleLeftClick} slideCounter={slideCounter} />
          </div>
          <div onMouseEnter={() => setSlideState('right')} className="mx-auto mb-12">
            <SlideRightButton handleClick={handleRightClick} slideCounter={slideCounter} />
          </div>
          
        </div>
        <AnimatePresence>
          <motion.div

          // TODO Come back to this and try out custom animations to add a delay between the first one and the second starting
          // And also just fade out the first component maybe when it leaves.
          // This will probably be done by adding a delay before the component is rendered in the dom, rather than adding a delay on the animations

          // TODO Come back to this after the comms stuff is due too because we all know you aint gonna figure this out until after that.
            key={slideCounter}
            // initial={{ opacity: 0, x: 100 }}
            initial={slideInitial}
            animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: -100 }}
            exit={slideExit}

            transition={{ duration: 0.5 }}
            style={{ position: 'absolute' }}
            className="h-auto mt-4 w-full"
          >
            {
              slideCounter === 0 ? <CoverLetter handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} slideCounter={slideCounter}/>
              : slideCounter === 1 ? <Resume handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} slideCounter={slideCounter}/>
              : <Interview handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} slideCounter={slideCounter}/>
            }
          </motion.div>
        </AnimatePresence>
        
        {/* Button container positioned below the animated content */}
        <div className="relative w-full flex justify-center mt-4">
{/*
// ==================================================================================== //
// ==================== Buttons for navigating the about me slides ==================== //
// ==================================================================================== //
*/}

          {/* <a onClick={() => handleLeftClick(slideCounter)} className="mx-auto z-50 text-white">
            LEFT
          </a> */}
          {/* <a onClick={() => handleRightClick(slideCounter)} className="mx-auto z-50 text-white">
            RIGHT
          </a> */}
        </div>
      </div>

      
    </>
  )
}

export default AboutMe