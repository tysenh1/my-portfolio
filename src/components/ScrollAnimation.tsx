import {motion, useScroll, useTransform, useMotionValueEvent} from "framer-motion";
import {useEffect, useRef} from "react";


function ScrollAnimation() {
    
    const scrollRef = useRef(null)
    const videoRef = useRef<HTMLVideoElement>(null);
    
    // const { scrollYProgress } = useScroll({ container: scrollRef})
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end end']
    })
    
    const playbackTime = useTransform(scrollYProgress, [0, 1], [0, 1]);
    
    useMotionValueEvent(playbackTime, "change", (latest) => {
        if (videoRef.current) {
            const duration = videoRef.current.duration || 1;
            videoRef.current.currentTime = latest * duration;
        }
    });
    
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
            <div className={"h-[4000px] w-full"} ref={scrollRef}>
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
                           className="h-[300px] absolute right-0 top-0"
                            ref={videoRef}
                            src="https://raw.githubusercontent.com/tysenh1/my-portfolio/refs/heads/main/src/assets/chill-blue-blob-slow-SHORT.mp4">
                    </video>
                
                </div>
            </div>
        
        // <div
        //     ref={scrollRef}
        //     style={{
        //         height: "100vh", // Height of the parent element
        //         width: "100%",
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         backgroundColor: "#f0f0f0",
        //     }}
        // >
        //     <motion.img
        //         src="your-image.jpg"
        //         alt="Rotating"
        //         style={{
        //             width: "200px",
        //             height: "200px",
        //             rotateY: rotateYPurple, // Rotate based on scroll progress
        //         }}
        //     />
        // </div>

)
}

export default ScrollAnimation;