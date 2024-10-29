import { motion } from 'framer-motion'

function Test() {
    return (
        <motion.div className='text-white' animate={{ y: -100 }}>
            <h1>Hello World!</h1>
        </motion.div>
    )
}

export default Test