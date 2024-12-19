import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import TechStackPopup from "./TechStackPopup.tsx";

function TechStack() {
    const refs = useRef<[HTMLDivElement | null]>([])
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const testRef = useRef<HTMLDivElement>(null)
    const [isAnimated, setIsAnimated] = useState<boolean>(false)
    
    const animationStates = {
        initial: {
          display: 'none',
          height: '0px',
          width: '0px'
        },
        heightInitial: {
            height: 'auto'
        },
        heightAnimate: {
            height: ['72px', '400px', '400px'],
            marginTop: ['12px', '24px', '24px'],
            transition: {
                duration: 1,
                times: [0, 0.4, 1]
            }
        },
        heightNotAnimated: {
            height: ['400px', '400px', '72px'],
            marginTop: ['24px', '24px', '12px'],
            transition: {
                duration: 1,
                times: [0, 0.6, 1]
            }
            
        },
        widthAnimate: {
            display: 'flex',
            width: ['0%', '0%', '1433px'],
            marginTop: ['24px', '24px', '12px'],
            height: ['0px', '400px', '400px'],
            transition: {
                duration: 1,
                times: [0, 0.4, 1]
            }
        },
        notAnimated: {
            display: 'none',
            height: ['400px', '400px', '0px'],
            marginTop: ['24px', '24px', '12px'],
            width: ['100%', '0%', '0%'],
            
            transition: {
                duration: 1,
                times: [0, 0.6, 1]
            }
        }
        // inactive: {
        //     position: 'static',
        //     width: 'auto',
        //     height: 'auto',
        //     zIndex: 0,
        //     transition: { duration: 0.3 }
        // },
        // active: {
        //     position: 'relative',
        //     width: '100%',
        //     height: '400px',
        //     zIndex: 10,
        //     transition: { duration: 0.3 }
        // }

    }
    
    const stackArray = [
        'Python',
        'JavaScript',
        'HTML',
        'CSS',
        'Node.js/TypeScript',
        'GoLang',
        'Django',
        'React.js',
        'TailwindCSS',
        'Framer Motion',
        'Figma',
        'NestJS',
        'TypeORM',
        'Slonik',
        'PostgreSQL',
        'MariaDB',
        'MongoDB',
        'VSCode',
        'WebStorm',
        'Git/GitHub'
    ]
    
    const handleClick = (index: number) => {
        if (refs.current[index]) {
            setActiveIndex(activeIndex === index ? null : index)

        }
        
    }
    
    return (
        <div className={"relative pt-3"} ref={testRef}>
            <div className={"relative w-full z-10"}>
                <motion.div
                    className={"right-0 absolute border-gray-300 border-2 backdrop-blur-lg rounded-3xl"}
                    variants={animationStates}
                    initial={"initial"}
                    animate={isAnimated ? 'widthAnimate' : 'notAnimated'}
                    // onClick={() => setIsAnimated(isAnimated ? false : true)}
                >
                    <TechStackPopup index={0} />
                    <img
                        src={"/my-portfolio/x.svg"}
                        className={"w-10 h-10 absolute right-4 top-4 cursor-pointer"}
                        onClick={() => setIsAnimated(false)}
                    />
                </motion.div>
            </div>
            
            <motion.div
                variants={animationStates}
                initial={false}
                animate={isAnimated ? 'heightAnimate' : 'heightNotAnimated'}
                className={""}
            >
                {stackArray.map((tech, index) => {
                    return (
                        <div
                            className={"border-2 border-gray-300 px-1 py-0.5 justify-center items-center inline-flex rounded-lg mx-1 cursor-pointer top-0 mb-2"}
                            onClick={() => {
                                setIsAnimated(isAnimated ? false : true)
                                handleClick(index)
                            }}
                        >
                            <p className={"text-white text-sm"}>{tech}</p>
                        </div>
                    )
                })}
            </motion.div>
        
        
        </div>
    )
}

export default TechStack