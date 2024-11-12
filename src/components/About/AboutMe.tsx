import { useState } from "react"
import Resume from "./Resume"
import CoverLetter from "./CoverLetter"
import Interview from "./Interview"
import { AnimatePresence, motion } from "framer-motion"
import Carousel from "./AnimateTest"

function AboutMe() {

  const [slideCounter, setSlideCounter] = useState(0)


  function handleLeftClick(slideCounter: number) {
    if (slideCounter == 0) {
      setSlideCounter(2)
    } else {
      setSlideCounter(slideCounter-1)
    }
    console.log(slideCounter)
  }

  function handleRightClick(slideCounter: number) {
    if (slideCounter == 2) {
      setSlideCounter(0)
    } else {
      setSlideCounter(slideCounter+1)
    }
    console.log(slideCounter)
  }

  return (
    <>
    <div className="relative w-full h-auto overflow-visible">
      <AnimatePresence>
        <motion.div
          key={slideCounter}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {
            slideCounter == 0 ? <CoverLetter />
            : slideCounter == 1 ? <Resume />
            : <Interview />
          }
        </motion.div>
        
      </AnimatePresence>
    </div>
      
      {/* <Carousel /> */}

      <div className="w-full flex [&_a]:text-white">
        <a onClick={() => handleLeftClick(slideCounter)} className="mx-auto">
          LEFT
        </a>
        <a onClick={() => handleRightClick(slideCounter)} className="mx-auto">
          RIGHT
        </a>
      </div>
    </>
  )
}

export default AboutMe