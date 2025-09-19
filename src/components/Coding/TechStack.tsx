import React, {MutableRefObject, RefObject} from "react";
import {motion, Variants} from "motion/react";
import TechStackPopup from "./TechStackPopup.tsx";

function TechStack({
    animationStates,
    refs,
    techPopupParentRef,
    isAnimated,
    setIsAnimated,
    popupWidth,
    setPopupWidth,
    techIndex,
    setTechIndex,
    stackArray,
    activeIndex,
    setActiveIndex
                   }: {
    animationStates: Variants,
    refs: MutableRefObject<(HTMLDivElement | null)[]>,
    techPopupParentRef: RefObject<HTMLDivElement>,
    isAnimated: boolean,
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>,
    popupWidth: number,
    setPopupWidth: React.Dispatch<React.SetStateAction<number>>,
    techIndex: number,
    setTechIndex: React.Dispatch<React.SetStateAction<number>>,
    stackArray: string[],
    activeIndex: number | null,
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
}) {
    
    const handleClick = (index: number) => {
        setTechIndex(index)
        if (refs.current[index]) {
            setActiveIndex(activeIndex === index ? null : index)
            
        }
        if (techPopupParentRef.current) {
            setPopupWidth(techPopupParentRef.current.offsetWidth)
        }
        
    }
    
    
    
    return (
        <div className={"relative pt-3"}>
            <div className={"relative w-full z-10"} ref={techPopupParentRef}>
                <motion.div
                    className={"right-0 absolute border-gray-300 border-2 backdrop-blur-lg rounded-3xl"}
                    
                    
                    variants={animationStates}
                    initial={"initial"}
                    animate={isAnimated ? 'widthAnimate' : 'notAnimated'}
                    ref={techPopupParentRef}
                >
                    <TechStackPopup index={techIndex} width={popupWidth} setIsAnimated={setIsAnimated} isAnimated={isAnimated}/>
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
                                setIsAnimated(!isAnimated)
                                handleClick(index)
                            }}
                            key={index}
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