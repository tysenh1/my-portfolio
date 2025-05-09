import techStackData from '../../assets/techStackData.json'
import {useEffect, useState} from "react";
import {motion} from "motion/react"

function TechStackPopup({index, width, setIsAnimated, isAnimated}: {
    index: number,
    width: number,
    setIsAnimated: Function,
    isAnimated: boolean
}) {

    const techStack = techStackData

    const [currentWidth, setCurrentWidth] = useState('')
    // const stackInfo = techStack[index]
    const [currentStack, setCurrentStack] = useState<{
        title: string,
        description: string,
        proficiency: number,
        timeUsed: string,
        logoPath: string | null
    }>({
        title: '',
        description: '',
        proficiency: 0,
        timeUsed: '',
        logoPath: null
    })
    
    const barVariants = {
        initial: {
            width: '0%',
            transition: {
                duration: 0,
                delay: 0.6,
                ease: 'easeOut'
            }
        },
        animate: {
            width: `${currentStack.proficiency}%`,
            // width: '60%',
            transition: {
                duration: 1,
                delay: 0.75,
                ease: 'easeOut'
            }
        }
    }
    
    useEffect(() => {
        setCurrentWidth(`${width}px`)
    }, [width])
    
    useEffect(() => {
        setCurrentStack(techStack[index])
    }, [index])
    
    // console.log(techStack[0])
    return (
        <div className={`w-full h-full rounded-lg overflow-hidden relative`}>
            <div className={`h-full rounded-lg absolute p-4`} style={{width: `${currentWidth}`}}>
                <div className={"w-full h-auto inline-flex"}>
                    <img src={currentStack.logoPath || ''} className={"w-10 h-10 my-auto mx-4"}/>
                    <h3 className={"text-white text-4xl font-light my-auto"}>{currentStack.title}</h3>
                    <img
                        src={"/x.svg"}
                        className={"w-10 h-10 cursor-pointer ml-auto mr-1"}
                        onClick={() => {
                            setIsAnimated(false)
                            setTimeout(() => {
                                setCurrentStack({
                                title: '',
                                description: '',
                                proficiency: 0,
                                timeUsed: '',
                                logoPath: null
                            })
                            }, 500)
                            
                        }}
                    />
                </div>
                <div className="h-px bg-white mx-6 mb-6 mt-4"></div>
                
                <p className={"text-white text-lg mx-6"}>{currentStack.description}</p>
                <div className={"w-full h-16 inline-flex mt-8"}>
                    <div className={"w-full inline-flex mx-8 justify-center items-center"}>
                        <p className={"text-white text-lg whitespace-nowrap my-auto mr-4"}>Skill Level: </p>
                        <div className={"h-12 w-full border-gray-300 border-2 p-2 rounded-lg"}>
                            <motion.div
                                variants={barVariants}
                                initial={'initial'}
                                animate={isAnimated ? 'animate' : 'initial'}
                                className={'bg-blue-700 z-10 h-full rounded-sm'}
                                
                            ></motion.div>
                        </div>
                    </div>
                    <div className={"w-[2px] bg-gray-300 h-full"}></div>
                    <div className={"w-full mx-8 h-full inline-flex justify-center items-center"}>
                        <p className={"text-white text-lg whitespace-nowrap"}>Time using this tech: {currentStack.timeUsed}</p>
                    </div>
                
                
                </div>
            
            </div>
        </div>
    
    )
}

export default TechStackPopup