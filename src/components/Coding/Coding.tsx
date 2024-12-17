import PageConstruction from "../PageConstruction.tsx";
import {motion} from "framer-motion";


function Coding() {
    
    const variants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 100, y: 0 }
    }
    
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
        >
            <PageConstruction />
            
        </motion.div>
        
    )
}

export default Coding
