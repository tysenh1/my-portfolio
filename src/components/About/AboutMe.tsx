import { useState } from "react"
import Resume from "./Resume"
import CoverLetter from "./CoverLetter"
import Interview from "./Interview"
import { AnimatePresence, motion } from "framer-motion"

function AboutMe() {

  const [slideCounter, setSlideCounter] = useState(0)


  function handleLeftClick(slideCounter: number) {
    slideCounter == 0 ? setSlideCounter(0) : setSlideCounter(slideCounter+1)
  }

  function handleRightClick(slideCounter: number) {
    slideCounter == 2 ? setSlideCounter(0) : setSlideCounter(slideCounter+1)
  }

  return (
    <>
      <div className="relative w-full h-auto">
        <AnimatePresence>
          <motion.div
            key={slideCounter}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-auto mt-4" // Ensure it takes up space
          >
            {
              slideCounter === 0 ? <CoverLetter />
              : slideCounter === 1 ? <Resume />
              : <Interview />
            }
          </motion.div>
        </AnimatePresence>
        
        {/* Button container positioned below the animated content */}
        <div className="relative w-full flex justify-center mt-4">
          <a onClick={() => handleLeftClick(slideCounter)} className="mx-auto z-50 text-white">
            LEFT
          </a>
          <a onClick={() => handleRightClick(slideCounter)} className="mx-auto z-50 text-white">
            RIGHT
          </a>
        </div>
      </div>
      {/* <div className="relative w-full h-auto">
        <div className="relative">
          <AnimatePresence>
            <motion.div
              key={slideCounter}
              initial={{ opacity: 0, right: 100 }}
              animate={{ opacity: 1, right: 0 }}
              exit={{ opacity: 0, right: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full mt-40"
            >
              {
                slideCounter == 0 ? <CoverLetter />
                : slideCounter == 1 ? <Resume />
                : <Interview />
              }
            </motion.div>
            
          </AnimatePresence>
        </div>
        <div className=" relative w-full flex [&_a]:text-white">
          <a onClick={() => handleLeftClick(slideCounter)} className="mx-auto z-50">
            LEFT
          </a>
          <a onClick={() => handleRightClick(slideCounter)} className="mx-auto z-50">
            RIGHT
          </a>
        </div>
      </div> */}
      
      
      {/* <Carousel /> */}

      
    </>
  )
}

export default AboutMe