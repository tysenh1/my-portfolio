import {motion, useScroll, useTransform, useMotionValueEvent} from "framer-motion";
import {useRef, useEffect, useState} from "react";


function ScrollAnimation() {
    
    const scrollRef = useRef(null)
    const videoRef = useRef<HTMLVideoElement>(null);
    const totalFrames = 112;
    
    // const { scrollYProgress } = useScroll({ container: scrollRef})
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end end']
    })
    
    const rotateYPurple = useTransform(
        scrollYProgress,
        [0, 1],
        ['0deg', '180deg']
    )
    
    const rotateYYellow = useTransform(
        scrollYProgress,
        [0, 1],
        ['180deg', '360deg']
    )
    

    
    return (
        // <div
        //     className={"relative h-[6000px]"}
        // >
        //     <canvas ref={canvasRef} className="sticky top-0 right-0"></canvas>
        // </div>
    
            <div className={"h-[7000px] w-full"} ref={scrollRef}>
                <div className={"w-full px-auto h-auto perspective sticky top-0 "}
                     style={{transformStyle: 'preserve-3d'}}>

                    <motion.img
                        src={"https://github.com/tysenh1/my-portfolio/blob/main/src/assets/purple-square.png?raw=true"}
                        style={{
                            rotateY: rotateYPurple,
                            transformOrigin: 'center center',
                            backfaceVisibility: 'hidden'
                        }} className={"top-24 left-24 absolute"}/>
                    <motion.img
                        src={"https://github.com/tysenh1/my-portfolio/blob/main/src/assets/yellow-square.png?raw=true"}
                        style={{
                            rotateY: rotateYYellow,
                            transformOrigin: 'center center',
                            backfaceVisibility: 'hidden'
                        }} className={"top-24 left-24 absolute"}/>

                    <video muted preload={"auto"}
                           className="h-[300px] absolute right-0 top-0 hidden"
                           ref={videoRef}>
                        <source
                            src="https://raw.githubusercontent.com/tysenh1/my-portfolio/refs/heads/main/src/assets/Jellyfish-Jam_1.mp4"
                            type="video/mp4"/>
                    </video>

                </div>
            </div>

)
}

export default ScrollAnimation;