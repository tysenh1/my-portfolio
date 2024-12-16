import { motion } from 'framer-motion';

function NavHeaderButton({navText, buttonVariants, buttonIndicatorVariants, activeButton, buttonId, handleNavClick, setPageContent}: {
    navText: string,
    buttonVariants: any,
    buttonIndicatorVariants: any,
    activeButton: string,
    buttonId: string,
    handleNavClick: Function,
    setPageContent: Function
}) {
    
    
    return (
        <motion.div
            onClick={() => {
                handleNavClick(buttonId)
                setPageContent(navText)
            }}
            className={"mt-4 mb-0 flex flex-col mx-auto cursor-pointer"}
            variants={buttonVariants}
            initial="initial"
            animate={activeButton === `${buttonId}` ? 'active' : 'inactive'}
            transition={{duration: 0.2, ease: 'easeOut'}}
            style={{transformOrigin: 'bottom'}}
            // whileHover={activeButton === `${buttonId}` ? '' : 'hover'}
        >
            <p className={`text-2xl font-light text-white mx-auto mb-1`}>{navText}</p>
            <motion.div
                className={`w-20 h-2 bg-white mx-auto rounded-tl-full rounded-tr-full clip-class`}
                variants={buttonIndicatorVariants}
                initial="initial"
                animate={activeButton === `${buttonId}` ? 'active' : 'inactive'}
                transition={{duration: 0.3}}
            ></motion.div>
        </motion.div>
    )
}

export default NavHeaderButton