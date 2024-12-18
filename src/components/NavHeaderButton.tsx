import { motion } from 'framer-motion';

function NavHeaderButton({navText, buttonVariants, buttonIndicatorVariants, activeButton, buttonId, handleNavClick, setPageContent}: {
    navText: string,
    buttonVariants: any,
    buttonIndicatorVariants: any,
    activeButton: string,
    buttonId: string,

    handleNavClick: Function,
    setPageContent: Function,
}) {
    
    
    return (

            <motion.div
                
                className={"flex flex-col mb-0 mt-auto w-[200px] mx-auto"}
                variants={buttonVariants}
                initial="initial"
                animate={activeButton === `${buttonId}` ? 'active' : 'inactive'}
                transition={{duration: 0.4, ease: 'easeOut'}}
                style={{transformOrigin: 'bottom'}}
                // whileHover={activeButton === `${buttonId}` ? '' : 'hover'}
            >
                <p
                    className={`text-4xl font-light text-white mx-auto mb-4 cursor-pointer`}
                    onClick={() => {
                        handleNavClick(buttonId)
                        setPageContent(navText)
                    }}
                >{navText}</p>
                <motion.div
                    className={`w-20 h-3 bg-white mx-auto rounded-tl-full rounded-tr-full clip-class`}
                    variants={buttonIndicatorVariants}
                    initial="initial"
                    animate={activeButton === `${buttonId}` ? 'active' : 'inactive'}
                    transition={{duration: 0.3}}
                ></motion.div>
            </motion.div>

    )
}

export default NavHeaderButton