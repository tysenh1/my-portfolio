import PageConstruction from "../PageConstruction.tsx";
import {useEffect, useRef} from "react";
import {motion} from "framer-motion";


function Other({setPageHeight}: {setPageHeight: (height: number) => void}) {
    const otherRef = useRef<HTMLDivElement>(null)
    
    const variants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 100, y: 0 }
    }
    
    useEffect(() => {
        if (otherRef.current) {
            setPageHeight(otherRef.current.offsetHeight + 96)
        }
    }, [otherRef]);
    
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
            ref={otherRef}
        >
            <PageConstruction/>
        
        </motion.div>
    )
}

export default Other