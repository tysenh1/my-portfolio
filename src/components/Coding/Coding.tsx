import PageConstruction from "../PageConstruction.tsx";
import {motion} from "framer-motion";
import {useEffect, useRef} from "react";
import TechStack from "./TechStack.tsx";
import techStack from "./TechStack.tsx";


function Coding({setPageHeight}) {
    const codingRef = useRef<HTMLDivElement>(null)
    
    const variants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 100, y: 0 }
    }
    
    useEffect(() => {
        if (codingRef.current) {
            setPageHeight(codingRef.current.offsetHeight + 96)
        }
    }, [codingRef]);
    
    return (
        <motion.div
            className={"relative w-full h-auto my-12"}
            variants={variants}
            animate={'animate'}
            // initial={'initial'}
            transition={{
                duration: 0.5,
                ease: 'easeOut'
            }}
            ref={codingRef}
        >
            <PageConstruction />
            <div className={"w-full flex justify-center"}>
                <h1 className="text-white text-5xl font-light font-roboto mb-8">Coding</h1>
            </div>
            
            <TechStack />
        
        
        </motion.div>
    
    )
}

export default Coding
