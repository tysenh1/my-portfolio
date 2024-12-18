import PageConstruction from "../PageConstruction.tsx";
import {motion} from "framer-motion";
import {useEffect, useRef} from "react";


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
            
        </motion.div>
        
    )
}

export default Coding