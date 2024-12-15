import {motion, useScroll, useTransform, useMotionValueEvent, useSpring} from "framer-motion";
import {useRef, useEffect, useState} from "react";


function ScrollAnimation() {
    
    const scrollRef = useRef(null)
    const canvasRef = useRef(null);
    const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);

    
    // const { scrollYProgress } = useScroll({ container: scrollRef})
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end end']
    })
    
    
    const [imageOneOpacity, imageTwoOpacity, imageThreeOpacity] = [
        useTransform(scrollYProgress, [0, 0.06, 0.3, 0.36], [0, 1, 1 ,0]),
        useTransform(scrollYProgress, [0.3, 0.36, 0.63, 0.7], [0, 1, 1 ,0]),
        useTransform(scrollYProgress, [0.63, 0.7], [0, 1])
    ]
    
    const [imageOneX, imageTwoX, imageThreeX] = [
        useTransform(scrollYProgress, [0, 0.06, 0.3, 0.36], [-100, 0, 0, 100]),
        useTransform(scrollYProgress, [0.3, 0.36, 0.63, 0.7], [-100, 0, 0, 100]),
        useTransform(scrollYProgress, [0.63, 0.7], [-100, 0])
    ]
    
    const [imageOneOpacitySpring, imageTwoOpacitySpring, imageThreeOpacitySpring] = [
        useSpring(imageOneOpacity, { stiffness: 150, damping: 35 }),
        useSpring(imageTwoOpacity, { stiffness: 150, damping: 35 }),
        useSpring(imageThreeOpacity, { stiffness: 150, damping: 35 })
    ]
    
    const [imageOneXSpring, imageTwoXSpring, imageThreeXSpring] = [
        useSpring(imageOneX, { stiffness: 100, damping: 35 }),
        useSpring(imageTwoX, { stiffness: 100, damping: 35 }),
        useSpring(imageThreeX, { stiffness: 100, damping: 35 })
    ]
    
    
    
    const [textOneOpacity, textTwoOpacity, textThreeOpacity] = [
        useTransform(scrollYProgress, [0, 0.06, 0.3, 0.36], [0, 1, 1 ,0]),
        useTransform(scrollYProgress, [0.3, 0.36, 0.63, 0.7], [0, 1, 1 ,0]),
        useTransform(scrollYProgress, [0.63, 0.7], [0, 1])
    ]
    
    const [textOneY, textTwoY, textThreeY] = [
        useTransform(scrollYProgress, [0, 0.06, 0.3, 0.36], [100, 0, 0, -100]),
        useTransform(scrollYProgress, [0.3, 0.36, 0.63, 0.7], [100, 0, 0, -100]),
        useTransform(scrollYProgress, [0.63, 0.7], [100, 0])
    ]
    
    const [textOneOpacitySpring, textTwoOpacitySpring, textThreeOpacitySpring] = [
        useSpring(textOneOpacity, { stiffness: 150, damping: 35 }),
        useSpring(textTwoOpacity, { stiffness: 150, damping: 35 }),
        useSpring(textThreeOpacity, { stiffness: 150, damping: 35 })
    ]
    
    const [textOneYSpring, textTwoYSpring, textThreeYSpring] = [
        useSpring(textOneY, { stiffness: 100, damping: 35 }),
        useSpring(textTwoY, { stiffness: 100, damping: 35 }),
        useSpring(textThreeY, { stiffness: 100, damping: 35 })
    ]
    
    // const imageOneOpacity = useTransform(scrollYProgress, [0, 0.05], ['0%', '100%'])
    // const imageOneX = useTransform(scrollYProgress, [0, 0.05], [-100, 0])
    //
    // const imageTwoOpacity = useTransform(scrollYProgress, [0.475, 0.525], ['0%', '100%'])
    // const imageTwoX = useTransform(scrollYProgress, [0.475, 0.525], [-100, 0])
    //
    //
    // const imageOneOpacitySpring = useSpring(imageOneOpacity, { stiffness: 100, damping: 30 })
    // const imageTwoOpacitySpring = useSpring(imageTwoOpacity, { stiffness: 100, damping: 30 })
    //
    // const imageOneXSpring = useSpring(imageOneX, { stiffness: 150, damping: 35 })
    // const imageTwoXSpring = useSpring(imageTwoX, { stiffness: 150, damping: 35 })
    
    // const rotateYImage1 = useTransform(
    //     scrollYProgress,
    //     [0, 0.25, 0.75, 1],
    //     ['0deg', '0deg', '180deg', '180deg']
    // )
    //
    // const rotateYImage2 = useTransform(
    //     scrollYProgress,
    //     [0, 0.25, 0.75, 1],
    //     ['180deg', '180deg', '360deg', '360deg']
    // )
    //
    // const rotateYCanvas = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     ['0deg', '180deg']
    // )
    
    return (
        
        <div className={"h-[7000px] w-full"} ref={scrollRef}>
            <div className={"w-full px-auto h-auto perspective sticky top-0 "}
                 style={{transformStyle: 'preserve-3d'}}
            >
                <div className={"w-full h-[100vh] flex"}>
                    <div
                        className={"w-[50vw] flex justify-center items-center h-[100vh]"}
                    >
                        {/*<motion.canvas className={"w-[300px] h-[200px]"}></motion.canvas>*/}
                        <motion.div
                            className={"w-[600px] h-[500px] bg-blue-700 absolute"}
                            style={{
                                opacity: imageOneOpacitySpring,
                                x: imageOneXSpring
                            }}
                        ></motion.div>
                        
                        <motion.div
                            className={"w-[600px] h-[500px] bg-amber-400 absolute"}
                            style={{
                                opacity: imageTwoOpacitySpring,
                                x: imageTwoXSpring
                            }}
                        ></motion.div>
                        
                        <motion.div
                            className={"w-[600px] h-[500px] bg-lime-500 absolute"}
                            style={{
                                opacity: imageThreeOpacitySpring,
                                x: imageThreeXSpring
                            }}
                        ></motion.div>
                    </div>
                    <div
                        className={"w-[50vw] flex justify-center items-center h-[100vh]"}
                    >
                        <motion.p
                            className={"text-white absolute"}
                            style={{
                                opacity: textOneOpacitySpring,
                                y: textOneYSpring
                            }}
                        >BANANA</motion.p>
                        
                        <motion.p
                            className={"text-white absolute"}
                            style={{
                                opacity: textTwoOpacitySpring,
                                y: textTwoYSpring
                            }}
                        >England! England! England!</motion.p>
                        
                        <motion.p
                            className={"text-white absolute"}
                            style={{
                                opacity: textThreeOpacitySpring,
                                y: textThreeYSpring
                            }}
                        >No no no no, Kevin, let me do it, let me do it, spita.</motion.p>
                    </div>
                </div>
                
                
                {/*<motion.img*/}
                {/*    src={"https://github.com/tysenh1/my-portfolio/blob/main/src/assets/purple-square.png?raw=true"}*/}
                {/*    style={{*/}
                {/*        opacity: imageOneOpacity,*/}
                {/*        x: imageOneXSpring,*/}
                {/*        transformOrigin: 'center center',*/}
                {/*        backfaceVisibility: 'hidden'*/}
                {/*    }}*/}
                {/*    // className={"top-24 left-24 absolute"}*/}
                {/*/>*/}
                {/*<motion.img*/}
                {/*    src={"https://github.com/tysenh1/my-portfolio/blob/main/src/assets/yellow-square.png?raw=true"}*/}
                {/*    style={{*/}
                {/*        opacity: imageTwoOpacity,*/}
                {/*        x: imageTwoXSpring,*/}
                {/*        transformOrigin: 'center center',*/}
                {/*        backfaceVisibility: 'hidden'*/}
                {/*    }}*/}
                {/*    // className={"top-24 left-24 absolute"}*/}
                {/*/>*/}
                
                {/*<motion.canvas*/}
                {/*    ref={canvasRef}*/}
                {/*    className="sticky top-0 right-0"*/}
                {/*    style={{*/}
                {/*        rotateY: rotateYCanvas,*/}
                {/*        transformOrigin: 'center center',*/}
                {/*    }}*/}
                {/*></motion.canvas>*/}
                
                {/*<motion.canvas*/}
                {/*    ref={canvasRef}*/}
                {/*    className="absolute top-24 left-24 w-auto"*/}
                {/*    style={{*/}
                {/*        rotateY: rotateYCanvas,*/}
                {/*        transformOrigin: 'center center',*/}
                {/*        backfaceVisibility: 'hidden',*/}
                {/*    }}*/}
                {/*></motion.canvas>*/}

            
            </div>
        </div>
    
    )
}

export default ScrollAnimation;