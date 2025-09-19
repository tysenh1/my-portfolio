import { motion } from 'framer-motion';

function NavHeaderButton({navText, buttonVariants, activeButton, buttonId, handleNavClick, setPageContent}: {
    navText: string,
    buttonVariants: any,
    activeButton: string,
    buttonId: string,
    handleNavClick: Function,
    setPageContent: Function,
}) {
    
    
    return (
        <motion.div
            
            className={"flex flex-col mb-0 mt-auto w-full mx-auto"}
            variants={buttonVariants}
            initial="initial"
            animate={activeButton === `${buttonId}` ? 'active' : 'inactive'}
            transition={{ease: 'easeOut'}}
            style={{
                transformOrigin: 'bottom',
            }}
        >
            <p
                className={`text-4xl font-light text-white mx-auto mb-4 cursor-pointer`}
                onClick={() => {
                    handleNavClick(buttonId)
                    setPageContent(navText)
                }}
            >{navText}</p>
        </motion.div>
    )
}

export default NavHeaderButton