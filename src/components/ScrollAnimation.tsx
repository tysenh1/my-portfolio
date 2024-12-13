import {motion, useScroll, useTransform, useMotionValueEvent} from "framer-motion";
import {useRef, useEffect, useState} from "react";


function ScrollAnimation() {
    
    const scrollRef = useRef(null)
    const canvasRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
    
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
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const frameCount = 113; // Total number of frames
        let images = [];
        
        const currentFrame = index => (
            `/my-portfolio/frames/frame_${index.toString().padStart(4, '0')}.png`
        );
        
        // Load and draw the first frame
        const firstImage = new Image();
        firstImage.onload = function() {
            canvas.width = firstImage.width;
            canvas.height = firstImage.height;
            context.drawImage(firstImage, 0, 0);
            setFirstFrameLoaded(true);
        };
        firstImage.src = currentFrame(0);
        
        // Load the rest of the frames
        for (let i = 1; i < frameCount; i++) {
            let img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }
        
        const updateImage = index => {
            if (index > 0 && images[index - 1]) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(images[index - 1], 0, 0);
            }
        };
        
        scrollYProgress.onChange(latest => {
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(latest * frameCount)
            );
            requestAnimationFrame(() => updateImage(frameIndex));
            setCurrentFrame(frameIndex);
        });
    }, [scrollYProgress]);
    
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
                    
                    {/*<video muted preload={"auto"}*/}
                    {/*       className="h-[300px] absolute right-0 top-0 hidden"*/}
                    {/*       ref={videoRef}>*/}
                    {/*    <source*/}
                    {/*        src="https://raw.githubusercontent.com/tysenh1/my-portfolio/refs/heads/main/src/assets/Jellyfish-Jam_1.mp4"*/}
                    {/*        type="video/mp4"/>*/}
                    {/*</video>*/}
                    {/*<div*/}
                    {/*    className={"relative top-0 right-0"}*/}
                    {/*>*/}
                        <canvas ref={canvasRef} className="sticky top-0 right-0" ></canvas>
                    {/*</div>*/}
                
                </div>
            </div>
    
    )
}

export default ScrollAnimation;