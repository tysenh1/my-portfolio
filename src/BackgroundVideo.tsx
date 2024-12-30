import { motion, useAnimation } from "framer-motion";
import {useEffect} from "react";

function BackgroundVideo() {
    
    const variants = {
        blob0: {
            d: "M11.9,-21.9C15.9,-16,19.7,-13.4,25.7,-9.2C31.7,-4.9,39.7,1,35.9,2.9C32.1,4.8,16.4,2.7,8.9,3C1.4,3.3,2,6,-0.3,13C-2.5,20,-7.5,31.3,-13.6,34.7C-19.6,38.2,-26.8,33.8,-29.7,27.4C-32.7,21.1,-31.5,12.7,-28.7,6.5C-25.9,0.3,-21.6,-3.8,-17.6,-6.2C-13.6,-8.6,-10,-9.3,-7.2,-15.7C-4.3,-22.1,-2.2,-34.1,0.9,-35.5C4,-37,8,-27.8,11.9,-21.9Z"
        },
        blob1: {
            d: "M17.2,-26.7C21,-24.2,22.2,-17.4,23.3,-11.6C24.5,-5.8,25.7,-1,25.9,4.4C26.2,9.7,25.5,15.6,21.4,16.4C17.4,17.1,9.9,12.7,3.9,15.5C-2.1,18.3,-6.7,28.3,-8.2,27.9C-9.8,27.5,-8.3,16.7,-14.3,11.5C-20.2,6.2,-33.6,6.5,-34.1,4.8C-34.6,3,-22.2,-0.7,-17.4,-6.6C-12.6,-12.5,-15.5,-20.5,-13.8,-24C-12.2,-27.6,-6.1,-26.7,0.3,-27.2C6.6,-27.6,13.3,-29.3,17.2,-26.7Z"
        },
        blob2: {
            d: "M20,-25.6C25.6,-27.6,29.5,-21.4,31.3,-15C33.2,-8.6,33,-1.9,33.7,6C34.3,13.9,35.9,23.2,31.1,24.7C26.3,26.2,15.1,19.9,8.1,17.2C1.1,14.6,-1.9,15.5,-3.2,13.8C-4.6,12.1,-4.3,7.8,-3.8,5.1C-3.2,2.4,-2.3,1.3,-9,-2.6C-15.7,-6.6,-30,-13.4,-30.9,-15.3C-31.9,-17.1,-19.5,-14,-12.1,-11.2C-4.7,-8.4,-2.3,-5.8,2.4,-9.6C7.2,-13.4,14.5,-23.6,20,-25.6Z"
        },
        blob3: {
            d: "M7.2,-16.8C7.5,-10.9,4.9,-6,5.9,-2.9C6.9,0.1,11.6,1.2,14.6,4.3C17.6,7.4,18.9,12.5,18,18.3C17.2,24.2,14.1,31,9.5,32.3C4.9,33.6,-1.3,29.6,-8.7,28.1C-16.1,26.6,-24.7,27.7,-26.5,23.9C-28.3,20.1,-23.4,11.4,-24,3.8C-24.6,-3.8,-30.7,-10.3,-29.2,-13.3C-27.8,-16.3,-18.8,-15.8,-12.7,-19.1C-6.6,-22.5,-3.3,-29.5,0,-29.6C3.4,-29.7,6.8,-22.8,7.2,-16.8Z"
        },
        blob4: {
            d: "M19.3,-27.5C23,-27.7,22.4,-18.9,25.3,-11.8C28.2,-4.7,34.5,0.6,33.2,4.2C31.8,7.9,22.8,9.9,16.2,9.6C9.6,9.2,5.3,6.5,2.5,6.5C-0.4,6.5,-2,9.3,-5.5,11.5C-9,13.7,-14.4,15.5,-21.7,14.6C-29,13.7,-38.1,10.3,-40.6,4.7C-43.1,-0.8,-39,-8.4,-34.2,-14.3C-29.4,-20.2,-24,-24.5,-18.2,-23.3C-12.4,-22,-6.2,-15.2,0.8,-16.5C7.8,-17.8,15.7,-27.2,19.3,-27.5Z"
        },
        blob5: {
            d: "M2.1,-9.4C3.4,-2.4,5.6,-3,6.2,-2.5C6.9,-2.1,6.1,-0.7,8.6,3.3C11.2,7.2,17.2,13.6,18,19.3C18.8,24.9,14.5,29.7,8.3,34.3C2.1,38.9,-5.9,43.2,-9.1,38.7C-12.2,34.2,-10.5,20.9,-11.5,13.5C-12.6,6,-16.4,4.5,-15.8,2.8C-15.2,1.1,-10.2,-0.6,-7.5,-2C-4.7,-3.5,-4.1,-4.5,-3.3,-11.7C-2.4,-18.9,-1.2,-32.2,-0.4,-31.5C0.4,-30.9,0.8,-16.3,2.1,-9.4Z"
        },
        blob6: {
            d: "M20.3,-34.8C22.9,-30,19.3,-18.6,19.5,-11C19.6,-3.5,23.6,0.2,22.5,2.8C21.4,5.3,15.2,6.5,11,7.3C6.9,8.1,4.7,8.4,1.8,11.9C-1.1,15.4,-4.8,22,-9.4,24.2C-14,26.4,-19.5,24.1,-18.2,19.3C-16.8,14.5,-8.5,7.3,-10.6,0.8C-12.6,-5.7,-25.2,-11.5,-28.4,-16.5C-31.6,-21.6,-25.6,-26,-19.3,-29.2C-13.1,-32.3,-6.5,-34.2,1.2,-36C8.9,-37.9,17.7,-39.6,20.3,-34.8Z"
        },
    }
    
    const controls = useAnimation()
    
    async function animationLoopBlob1() {
        for (let i = 0; i<= 6; i++) {
            // @ts-expect-error
            await controls.start(variants[`blob${i}`])
            
        }
        animationLoopBlob1()
    }
    
    useEffect(() => {
        animationLoopBlob1()
    }, []);
    
    return (
        // <div className={'absolute -z-50 top-0 w-full h-full flex justify-center items-center object-cover mask-repeat-no-repeat mask-size-cover mask-image-radial-at-c from-black to-transparent to-50% blur-3xl'}>
        <div className={'absolute -z-50 top-0 w-full h-full flex justify-center items-center blur-3xl'}>
            {/*<div className={'absolute w-20 h-20 bg-blue-700 top-1/2 left-1/2'}>*/}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0,0,100,100"
                 className={'absolute opacity-75 object-cover mask-repeat-no-repeat mask-size-cover mask-image-radial-at-c from-black to-transparent to-50%'}>
                <motion.path
                    fill={"#2731FB"}
                    variants={variants}
                    initial={'blob6'}
                    animate={controls}
                    // animate={'2'}
                    transition={{
                        duration: 10,
                        ease: 'easeInOut'
                    }}
                    width={'100%'}
                    height={'100%'}
                    transform={"translate(50 50)"}
                ></motion.path>
            
            </svg>
            {/*</div>*/}
            {/*<div className={'absolute w-20 h-20 bg-blue-700 top-1/2 left-1/2'}></div>*/}
            {/*<div className={'absolute w-20 h-20 bg-blue-700 top-1/2 left-1/2'}></div>*/}
            {/*<div className={'absolute w-20 h-20 bg-blue-700 top-1/2 left-1/2'}></div>*/}
            {/*<div className={'absolute w-20 h-20 bg-blue-700 top-1/2 left-1/2'}></div>*/}
        </div>
    
    )
}

// function BackgroundVideo() {
//     return (
//         <div className={'absolute -z-50 top-0 w-[100vw] h-[100vh]'}>
//             <video autoPlay loop muted preload={"auto"}
//                    className="object-cover mask-repeat-no-repeat mask-size-cover mask-image-radial-at-c from-black to-transparent to-50% blur-2xl h-[954px]">
//                 <source src="https://raw.githubusercontent.com/tysenh1/my-portfolio/refs/heads/main/src/assets/chill-blue-blob-slow-SHORT.mp4" type="video/mp4"/>
//             </video>
//         </div>
//     )
// }

export default BackgroundVideo