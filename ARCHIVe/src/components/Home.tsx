import { useEffect, useState } from "react";
import { motion } from 'framer-motion';



// @ts-ignore
function Home({setPageContent}) {

  const [animationStep, setAnimationStep] = useState(6)
  const [redButtonDelay, setRedButtonDelay] = useState(0.6)
  const [greenButtonDelay, setGreenButtonDelay] = useState(0.7)
  const [blueButtonDelay, setBlueButtonDelay] = useState(0.8)
  useEffect(() => {
    
    const timer = setTimeout(() => {
      if (animationStep < 4) {
        setAnimationStep((prev) => prev + 1)
      } else {
        setAnimationStep(1)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [animationStep])
  
  const animationVariants = {
    initial: {
      right: 0,
    },
    1: {
      right: 640,
    },
    2: {
      right: 1280,
    },
    3: {
      right: 1920,
    },
    4: {
      right: 2560,
      transitionEnd: { right: 0 }
    }
  }

  function handleNavClick(id: string) {
    setPageContent(id)

    const timer = setTimeout(() => {
      
      const element = document.getElementById(id)
      // @ts-ignore
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40)
    return () => clearTimeout(timer)
  }


  return (
    <>
      <div className="grid justify-center h-auto">
        <motion.div animate={{ y: -100, opacity: 100 }} transition={{duration: 0.5, delay: 0.5}}
          className="relative w-[773px] h-[510px] mt-16 top-[100px] opacity-0"
        >
          <div className="absolute w-[500px] h-[500px] bg-gray-950 rounded-full none z-10 justify-center items-center object-cover mask-repeat-no-repeat mask-size-cover grid overflow-hidden mask-image-[url(https://raw.githubusercontent.com/tysenh1/tysenh1.github.io/bfb3e7983fb8c90bab6ccba1b5f56f9c0a10dfc5/src/assets/black-circle.svg)] [&_p]:font-roboto [&_p]:font-medium [&_p]:tracking-wider [&_p]:text-5xl">
   
            <motion.div 
              initial='initial'
              animate={
                `${animationStep}`
              }
              transition={{duration: 0.5 }}
              variants={animationVariants}
            className={`absolute w-[500px] h-[500px]`}>

              {/* First slide */}
              <div className="relative top-[112px]">
                <p className="text-white grid font-roboto mb-10">
                  <span className="mx-auto m-1">Hello, my</span>
                  <span className="mx-auto m-1">name is Tysen</span>
                </p>
                <p className="text-white grid font-roboto mt-10">
                  <span className="mx-auto m-1">I'm a backend web</span>
                  <span className="mx-auto m-1">developer</span>
                </p>
              </div>

              {/* Second slide */}
              <div className="left-[640px] bottom-[152px] relative">
              <p className="text-white grid mb-10">
                  <span className="mx-auto m-1">I have been</span>
                  <span className="mx-auto m-1">coding websites</span>
                </p>
                <p className="text-white grid  mt-10">
                  <span className="mx-auto m-1">for a total of</span>
                  <span className="mx-auto m-1">2 years</span>
                </p>
              </div>

              {/* Third slide */}
              <div className="relative bottom-[416px] left-[1280px]">
              <p className="text-white grid  mb-10">
                  <span className="mx-auto m-1">using libraries</span>
                  <span className="mx-auto m-1">such as Django,</span>
                </p>
                <p className="text-white grid  mt-10">
                  <span className="mx-auto m-1">NestJS, Slonik,</span>
                  <span className="mx-auto m-1">and React.js</span>
                </p>
              </div>

              {/* Fourth slide */}
              <div className="bottom-[681px] left-[1920px] relative">
              <p className="text-white grid  -mb-3">
                  <span className="mx-auto m-1">Click one</span>
                  <span className="mx-auto m-1">of the buttons</span>
                </p>
                <img src="https://img.icons8.com/?size=100&id=99266&format=png&color=FFFFFF" className="mx-auto w-[72px] h-[72px]"></img>
                <p className="text-white grid  -mt-5">
                  <span className="mx-auto m-1">to learn more</span>
                  <span className="mx-auto m-1">about me</span>
                </p>
              </div>

              {/* Fifth slide */}
              <div className="bottom-[944px] left-[2560px] relative">
                <p className="text-white grid  mb-10">
                  <span className="mx-auto m-1">Hello, my</span>
                  <span className="mx-auto m-1">name is Tysen</span>
                </p>
                <p className="text-white grid  mt-10">
                  <span className="mx-auto m-1">I'm a backend web</span>
                  <span className="mx-auto m-1">developer</span>
                </p>
              </div>
              
            </motion.div>
          </div>

          {/* Red thing sticking out of the main thing for About Me */}
          {/* This div doesn't actually do anything and I have no idea why I put it here */}
          <div>
            <motion.a
              animate={{ 
                x: [0, 308, 283, 295]
              }}
              transition={{
                duration: 0.6,
                delay: redButtonDelay,
                ease: 'easeOut',
                times: [0, 0.5, 0.75, 1]
              }}
              whileHover={{
                boxShadow: '2px -2px 30px 0px rgba(255, 0, 0, 0.5)',
                transition: {
                  duration: 0.3,
                },
              }}
              whileTap={{
                y: '4px',
                transition: {
                  duration: 0.1,
                  delay: 0,
                  ease: 'easeInOut'
                }
              }}
              onAnimationComplete={() => {
                setRedButtonDelay(0);
              }}

              href="#"
              
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('aboutme')
              }}

              className="top-[82px] w-button-width h-foreground-button-height block relative rounded-full left-[92px]"
            >
              <p className="left-[130px] top-[24px] text-[#EE4E4E] font-light text-3xl -z-10 absolute font-roboto tracking-wider">
                About Me
              </p>
              <div className="rounded-full -z-20 absolute w-button-width h-foreground-button-height border-[#ff4c4c] border-4 bg-background"></div>
            </motion.a>
            <motion.div animate={{ x: [0, 308, 283, 295] }} transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut', times: [0, 0.5, 0.75, 1] }}
              className="top-[126.5px] w-button-width h-[60.5px] bg-[#BE4949] rounded-br-[44px] -z-30 absolute left-[92px]"
            ></motion.div>
          </div>

          {/* Green thing sticking out of the main thing for coding */}
          {/* This div doesn't actually do anything and I have no idea why I put it here */}
          <div>
            <motion.a
              animate={{
                x: [0, 308, 283, 295]
              }} 
              transition={{
                duration: 0.6,
                delay: greenButtonDelay,
                ease: 'easeOut',
                times: [0, 0.5, 0.75, 1]
              }}
              // Uncomment this when the button isn't disabled
              // whileHover={{
              //   boxShadow: '2px -2px 30px 0px rgba(0, 255, 0, 0.4)',
              //   transition: {
              //     duration: 0.3,
              //   },
              // }}
              onAnimationComplete={() => {
                setGreenButtonDelay(0);
              }}
              // Uncomment this when the button isn't disabled
              // className="top-[122px] w-button-width h-foreground-button-height block relative rounded-full active:-translate-x-[0.5px] left-[129px] active:translate-y-1"
              className="top-[122px] w-button-width h-foreground-button-height block relative rounded-full left-[129px] cursor-not-allowed"
            >
              <p className="left-[150px] top-[24px] absolute text-[#48C453] font-light text-3xl -z-10 font-roboto tracking-wider">
                Coding
              </p>
              <div className="w-button-width h-foreground-button-height bg-background rounded-full -z-20 absolute border-[#4BF059] border-4"></div>
            </motion.a>
            <motion.div animate={{ x: [0, 308, 283, 295]}} transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut', times: [0, 0.5, 0.75, 1]}}
              className="top-[251.5px] w-button-width h-[60.5px] bg-[#48C453] rounded-br-[44px] -z-30 absolute left-[129px]"
            ></motion.div>
          </div>
          

          {/* Blue thing sticking out of the main thing for guitar */}
          {/* This div doesn't actually do anything and I have no idea why I put it here */}
          <div>
            <motion.a
              animate={{
                x: [30, 338, 313, 325]
              }}
              transition={{
                duration: 0.6,
                delay: blueButtonDelay,
                ease: 'easeOut',
                times: [0, 0.5, 0.75, 1]
              }}
              // Uncomment this when the button isn't blocked disabled
              // whileHover={{
              //   boxShadow: '2px -2px 30px 0px rgba(0, 0, 255, 0.5)',
              //   transition: {
              //     duration: 0.3,
              //   },
              // }}
              onAnimationComplete={() => {
                setBlueButtonDelay(0);
              }}
              // classes for when this button isn't locked
              // className="top-[162px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px] left-[62px] cursor-not-allowed"
              className="top-[162px] w-button-width h-foreground-button-height block relative rounded-full left-[62px] cursor-not-allowed"
            >
              <p className="left-[150px] top-[24px] text-[#5B6EED] font-light text-3xl -z-10 absolute font-roboto tracking-wider">
                Guitar
              </p>
              <div className="w-button-width h-foreground-button-height bg-background rounded-full -z-20 absolute border-[#6389FB] border-4"></div>
            </motion.a>
            <motion.div animate={{ x: [0, 308, 283, 295]}} transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut', times: [0, 0.5, 0.75, 1]}}
              className="top-[376.5px] w-[380px] h-[60.5px] bg-[#5B6EED] rounded-br-[44px] rounded-bl-[40px] -z-30 absolute left-[62px]"
            ></motion.div>
          </div>
          
        </motion.div>
      </div>
    </>
  );
}

export default Home;
