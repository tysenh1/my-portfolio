
import {useState, useRef} from "react";
import { ReactTyped } from 'react-typed'
import NavHeaderButton from "./NavHeaderButton.tsx";
import ScrollAnimation from "./ScrollAnimation.tsx";
import AboutMe from "./AboutMe/AboutMe.tsx";
import Coding from "./Coding/Coding.tsx";
import PleaseClick from "./PleaseClick.tsx";
import Other from "./Other/Other.tsx";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
    const [activeButton, setActiveButton] = useState<string>('');
    const [pageContent, setPageContent] = useState("");
    const [pageHeight, setPageHeight] = useState(136)
    const testRef = useRef<HTMLDivElement>(null)
    
    // const buttonIndicatorVariants = {
    //     active: {
    //         backgroundColor: '#2731FB',
    //         boxShadow: '0 4px 15px 5px rgba(35, 49, 251, 1)'
    //     },
    //     initial: {
    //         backgroundColor: '#FFFFFF',
    //         boxShadow: '0 4px 20px 3px rgba(255, 255, 255, 1)'
    //     },
    // }
    
    const newButtonVariants = {
        initial: {
            borderBottomColor: 'rgb(188,188,188)',
            borderBottomWidth: '2px'
        },
        active: {
            borderBottomColor: 'rgb(155,185,255)',
            borderBottomWidth: '8px'
        }
    }
    
    // const buttonVariants = {
    //     active: {scale: 1.2},
    //     inactive: {scale: 1},
    //     hover: {scale: 1.06},
    // }
    
    const componentVariants = {
        initial: { opacity: 0, y: 100 },
        exit: { opacity: 0, y: -100 },
        animate: { opacity: 100, y: 0 }
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
                    typeSpeed={60}
                    backSpeed={35}
                    loop
                    style={{
                        color: '#2f04d7',
                        textShadow: '1px 1px 12px #000000'
                    }}
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
            <ScrollAnimation />
            
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
                
                
                <div
                    className={"w-full h-auto m-[73px] border-2 border-gray-500 rounded-xl grid bg-white/10 z-10 relative"}>
                    <div className="w-full flex justify-end items-center absolute top-5 right-5">
                        <a
                            href={"https://www.linkedin.com/in/tysenh1/"}
                            className={"mx-4 flex w-36 h-12 items-center justify-center bg-[#007bb6] rounded-lg"}
                            target={"_blank"}
                        >
                            <img
                                src={"https://raw.githubusercontent.com/tysenh1/tysenh1.github.io/refs/heads/main/src/assets/linked-in-white.png"}
                                className={"h-7"}
                            ></img>
                        </a>
                        <a
                            href={"https://github.com/tysenh1"}
                            className={"mx-4 flex w-36 h-12 items-center justify-center bg-black rounded-lg"}
                            target={"_blank"}
                        >
                            {/* <img className='h-7 w-7 my-2 ml-2 mr-1' src='src/assets/github-mark-white.svg'></img> */}
                            <img
                                className={"h-7 w-7 mr-1"}
                                src={"https://raw.githubusercontent.com/tysenh1/tysenh1.github.io/bfb3e7983fb8c90bab6ccba1b5f56f9c0a10dfc5/src/assets/github-mark-white.svg"}
                            ></img>
                            {/* <img className='my-2 mr-2 ml-1 h-7' src='src/assets/GitHub_Logo_White.png'></img> */}
                            <img
                                className={"h-7 ml-1"}
                                src={"https://raw.githubusercontent.com/tysenh1/tysenh1.github.io/refs/heads/main/src/assets/GitHub_Logo_White.png"}
                            ></img>
                        </a>
                    </div>
                    <div className={"w-[90%] flex h-[150px] mx-auto px-20"}>
                        {/*<NavHeaderButton navText={'About Me'} buttonVariants={buttonVariants}*/}
                        {/*                 buttonIndicatorVariants={buttonIndicatorVariants} activeButton={activeButton}*/}
                        {/*                 buttonId={'button1'} handleNavClick={handleNavClick}*/}
                        {/*                 setPageContent={setPageContent}*/}
                        {/*/>*/}
                        {/*<NavHeaderButton navText={'Coding'} buttonVariants={buttonVariants}*/}
                        {/*                 buttonIndicatorVariants={buttonIndicatorVariants} activeButton={activeButton}*/}
                        {/*                 buttonId={'button2'} handleNavClick={handleNavClick}*/}
                        {/*                 setPageContent={setPageContent}*/}
                        {/*/>*/}
                        {/*<NavHeaderButton navText={'Other'} buttonVariants={buttonVariants}*/}
                        {/*                 buttonIndicatorVariants={buttonIndicatorVariants} activeButton={activeButton}*/}
                        {/*                 buttonId={'button3'} handleNavClick={handleNavClick}*/}
                        {/*                 setPageContent={setPageContent}*/}
                        {/*/>*/}
                        <NavHeaderButton
                            navText={'About Me'}
                            buttonVariants={newButtonVariants}
                            activeButton={activeButton}
                            buttonId={'button1'}
                            handleNavClick={handleNavClick}
                            setPageContent={setPageContent}
                        />
                        <NavHeaderButton
                            navText={'Coding'}
                            buttonVariants={newButtonVariants}
                            activeButton={activeButton}
                            buttonId={'button2'}
                            handleNavClick={handleNavClick}
                            setPageContent={setPageContent}
                        />
                        <NavHeaderButton
                            navText={'Other'}
                            buttonVariants={newButtonVariants}
                            activeButton={activeButton}
                            buttonId={'button3'}
                            handleNavClick={handleNavClick}
                            setPageContent={setPageContent}
                        />
                    </div>
                    <div className={`relative w-full`} style={{height: `${pageHeight}px`}}>
                        {/*<div className={`relative w-full`} style={{height: `auto`}}>*/}
                        <AnimatePresence>
                            <motion.div
                                variants={componentVariants}
                                initial={"initial"}
                                animate={"animate"}
                                exit={'exit'}
                                key={pageContent}
                                className={"absolute w-full h-auto"}
                                ref={testRef}
                            >
                                {pageContent == "About Me" ? (
                                    <AboutMe setPageHeight={setPageHeight}/>
                                ) : pageContent == "Coding" ? (
                                    <Coding setPageHeight={setPageHeight}/>
                                ) : pageContent == "Other" ? (
                                    <Other setPageHeight={setPageHeight}/>
                                ) : (
                                    <PleaseClick/>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                
                
                </div>
            
            </div>
        
        </>
    )
}

export default Home;