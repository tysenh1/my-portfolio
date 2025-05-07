import { motion } from "framer-motion";

function Header() {
    
    
    return (
        <header>
            <motion.nav
                className="flex w-full h-24 border-gray-500 border-b-2 bg-background/50 fixed backdrop-blur-sm z-50 -top-24"
                animate={{ y: 96 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            >
                <div className="absolute right-0 left-0 top-8 w-fit m-auto">
                    <p className="font-light text-3xl text-white font-roboto tracking-wider">
                        Welcome to My Portfolio!
                    </p>
                </div>
            </motion.nav>
        </header>
    )
}

export default Header