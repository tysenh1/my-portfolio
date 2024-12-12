
import {useEffect, useRef, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import { ReactTyped } from 'react-typed'
import NavHeaderButton from "./NavHeaderButton.tsx";

function Home() {
    const [activeButton, setActiveButton] = useState<string>('');
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({ container: scrollRef})
    const rotateYPurple = useTransform(
        scrollYProgress,
        [0, 1],
        ['0deg', '180deg']
    )
    
    const rotateYYellow = useTransform(
        scrollYProgress,
        [0, 1],
        ['180deg', '360deg']
    )
    
    const buttonIndicatorVariants = {
        active: {
            backgroundColor: '#2731FB',
            boxShadow: '0 4px 15px 10px rgba(35, 49, 251, 1)'
        },
        initial: {
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 20px 7px rgba(255, 255, 255, 1)'
        },
    }
    
    const buttonVariants = {
        active: {scale: 1.2},
        inactive: {scale: 1},
        hover: {scale: 1.06},
    }
    
    function handleNavClick(button: string) {
        setActiveButton(button);
    }
    
    return (
        <>
            <div
                className={"grid justify-center content-center text-center font-roboto font-light w-auto h-[954px] text-5xl text-white"}>
                <h1 className={""}>Hi, I'm Tysen.</h1>
                <h1 className={""}>I'm A <ReactTyped
                    strings={[
                        'Full Stack Developer',
                        'Technology Enthusiast',
                        'Lifelong Learner'
                    ]}
                    typeSpeed={75}
                    backSpeed={50}
                    loop
                    style={{color: '#2f04d7'}}
                    startDelay={500}
                
                /></h1>
            </div>
            <div className={"absolute bottom-0 grid justify-center w-full"}>
                <p className={"text-white font-light"}>Learn more about what I do</p>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={"w-10 h-10 mx-auto"}>
                    <path d="M7 10L12 15L17 10" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </div>
            {/* Div container for the blue bars behind */}
            
            {/*<div className={"h-[1500px]"}></div>*/}
            <div className={"w-full h-[600px] overflow-y-scroll"} ref={scrollRef}>
                <div className={"h-[2000px] w-full"}>
                    <div className={"w-full px-auto h-auto perspective sticky top-0 "}
                         style={{transformStyle: 'preserve-3d'}}>
                        
                        <motion.img
                            src={"https://github.com/tysenh1/my-portfolio/blob/main/src/assets/purple-square.png?raw=true"}
                            style={{
                                rotateY: rotateYPurple,
                                transformOrigin: 'center center',
                                backfaceVisibility: 'hidden'
                            }} className={"top-24 left-24 absolute"}/>
                        <motion.img
                            src={"https://github.com/tysenh1/my-portfolio/blob/main/src/assets/yellow-square.png?raw=true"}
                            style={{
                                rotateY: rotateYYellow,
                                transformOrigin: 'center center',
                                backfaceVisibility: 'hidden'
                            }} className={"top-24 left-24 absolute"}/>
                    </div>
                
                </div>
            </div>
            
            
            <div
                className={"flex border-t border-gray-400 h-auto w-full bg-gradient-to-b from-black to-[#150023] overflow-hidden"}>
                <div className={"relative blur-[200px] opacity-75"}>
                    <div className={"blur-[100px]"}>
                        <div
                            className={"absolute bg-[#2731FB] w-[75px] h-[920px] -rotate-24.3 left-[466px] top-[320px] blur-[200px]"}></div>
                        <div className={"absolute left-[1286px] top-[540px] blur-[200px]"}>
                            <div
                                className={'absolute bg-white w-[15px] h-[920px] -rotate-24.3 -left-[11px] top-[18.5px]'}></div>
                            <div
                                className={"absolute bg-[#2731FB] w-[75px] h-[920px] -rotate-24.3"}></div>
                            <div
                                className={"absolute bg-[#6F01B9] w-[15px] h-[920px] -rotate-24.3 left-[71px] -top-[18.5px]"}></div>
                        </div>
                    </div>
                
                </div>
                
                
                <div className={"w-full h-auto m-[73px] border-2 border-gray-400 rounded-md flex bg-white/10 z-10"}>
                    <div className={"w-full flex border-b-2 border-gray-400 mb-6"}>
                        <NavHeaderButton navText={'About Me'} buttonVariants={buttonVariants}
                                         buttonIndicatorVariants={buttonIndicatorVariants} activeButton={activeButton}
                                         buttonId={'button1'} handleNavClick={handleNavClick}/>
                        <NavHeaderButton navText={'Coding'} buttonVariants={buttonVariants}
                                         buttonIndicatorVariants={buttonIndicatorVariants} activeButton={activeButton}
                                         buttonId={'button2'} handleNavClick={handleNavClick}/>
                        <NavHeaderButton navText={'Other'} buttonVariants={buttonVariants}
                                         buttonIndicatorVariants={buttonIndicatorVariants} activeButton={activeButton}
                                         buttonId={'button3'} handleNavClick={handleNavClick}/>
                    </div>
                    <div>
                    
                    </div>
                
                </div>
            </div>
        
        </>
    )
}

export default Home;