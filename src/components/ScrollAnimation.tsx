import {motion, useScroll, useTransform, useMotionValueEvent, useSpring} from "framer-motion";
import {useRef, useEffect, useState} from "react";


function ScrollAnimation() {
    
    const scrollRef = useRef(null)
    const [activeSection, setActiveSection] = useState(0);
    const canvasRefs = [useRef<HTMLCanvasElement>(null), useRef<HTMLCanvasElement>(null), useRef<HTMLCanvasElement>(null)];
    const [frames, setFrames] = useState([[], [], []]);
    const [currentFrame, setCurrentFrame] = useState([0, 0, 0]);

    
    // const { scrollYProgress } = useScroll({ container: scrollRef})
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end end']
    })
    
    
    const [imageOneOpacity, imageTwoOpacity, imageThreeOpacity] = [
        useTransform(scrollYProgress, [0, 0.06, 0.3, 0.36], [0, 1, 1 ,0]),
        // useTransform(scrollYProgress, [0.3, 0.36], [0, 1]),
        useTransform(scrollYProgress, [0.3, 0.36, 0.63, 0.7], [0, 1, 1 ,0]),
        useTransform(scrollYProgress, [0.63, 0.7], [0, 1])
    ]
    
    const [imageOneY, imageOneX, imageTwoX, imageTwoRotateY, imageThreeX] = [
        useTransform(scrollYProgress, [0, 0.06], [-100, 0]),
        useTransform(scrollYProgress, [0.3, 0.36], [0, 100]),
        // useTransform(scrollYProgress, [0.3, 0.36, 0.63, 0.7], [-100, 0, 0, 100]),
        useTransform(scrollYProgress, [0.3, 0.36], [-100, 0]),
        useTransform(scrollYProgress, [0.6, 0.75], ['0deg', '180deg']),
        // useTransform(scrollYProgress, [0.63, 0.7], [-100, 0])
        useTransform(scrollYProgress, [0.6, 0.75], ['180deg', '360deg'])
    ]
    
    const [imageOneOpacitySpring, imageTwoOpacitySpring, imageThreeOpacitySpring] = [
        useSpring(imageOneOpacity, { stiffness: 150, damping: 35 }),
        useSpring(imageTwoOpacity, { stiffness: 150, damping: 35 }),
        useSpring(imageThreeOpacity, { stiffness: 150, damping: 35 })
    ]
    
    const [imageOneYSpring, imageOneXSpring, imageTwoXSpring, imageTwoRotateYSpring, imageThreeXSpring] = [
        useSpring(imageOneY, { stiffness: 100, damping: 35 }),
        useSpring(imageOneX, { stiffness: 100, damping: 35 }),
        useSpring(imageTwoX, { stiffness: 100, damping: 35 }),
        useSpring(imageTwoRotateY, { stiffness: 100, damping: 35 }),
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
    
    const loadImages = async (section, numFrames) => {
        const loadedFrames = [];
        const basePath = `/my-portfolio/frames/${section}/`;
        
        for (let i = 1; i <= numFrames; i++) {
            const img = new Image();
            img.src = `${basePath}frame_${i.toString().padStart(4, '0')}.png`;
            await new Promise((resolve) => {
                img.onload = () => {
                    console.log(`Loaded image ${i} for section ${section + 1}`);
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to load image ${i} for section ${section + 1}`);
                    resolve();
                };
            });
            loadedFrames.push(img);
        }
        
        return loadedFrames;
    };
    
    useEffect(() => {
        const loadAllFrames = async () => {
            const section1Frames = await loadImages('jellyfish-jam', 111); // Adjust frame count as needed
            const section2Frames = await loadImages('frontend', 145);
            const section3Frames = await loadImages('backend', 145);
            setFrames([section1Frames, section2Frames, section3Frames]);
        };
        loadAllFrames();
    }, []);
    
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.3) {
            setActiveSection(0);
            setCurrentFrame([Math.floor(latest / 0.3 * frames[0].length), 0, 0]);
        } else if (latest < 0.63) {
            setActiveSection(1);
            setCurrentFrame([frames[0].length - 1, Math.floor((latest - 0.3) / 0.33 * frames[1].length), 0]);
        } else {
            setActiveSection(2);
            setCurrentFrame([frames[0].length - 1, frames[1].length - 1, Math.floor((latest - 0.63) / 0.37 * frames[2].length)]);
        }
    });
    
    useEffect(() => {
        const drawFrames = () => {
            canvasRefs.forEach((canvasRef, index) => {
                if (canvasRef.current && frames[index][currentFrame[index]]) {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
                    
                    const img = frames[index][currentFrame[index]];
                    
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = img.width * dpr;
                    canvas.height = img.height * dpr;
                    
                    
                    ctx.scale(dpr, dpr);
                    ctx.drawImage(img, 0, 0);
                }
            });
        };
        
        drawFrames();
    }, [currentFrame, frames]);
    
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
        
        <div className={"h-[8500px] w-full"} ref={scrollRef}>
            <div className={"w-full px-auto h-auto perspective sticky top-0 "}
                 style={{transformStyle: 'preserve-3d'}}
            >
                <div className={"w-full h-[100vh] flex"}>
                    <div
                        className={"w-[50vw] flex justify-center items-center h-[100vh]"}
                        style={{ perspective: '1000px', }}
                    >

                        <motion.canvas
                            className={"w-[900px] h-auto absolute rounded-3xl"}
                            style={{
                                opacity: imageOneOpacitySpring,
                                x: imageOneXSpring,
                                y: imageOneYSpring,
                                boxShadow: '0 0 300px -50px rgba(35, 49, 251, 0.75)'
                            }}
                            ref={canvasRefs[0]}
                        ></motion.canvas>
                        
                        <motion.canvas
                            className={"w-[900px] h-auto absolute rounded-3xl"}
                            style={{
                                opacity: imageTwoOpacitySpring,
                                x: imageTwoXSpring,
                                rotateY: imageTwoRotateYSpring,
                                boxShadow: '0 0 300px -50px rgba(35, 49, 251, 0.75)'
                            }}
                            ref={canvasRefs[1]}
                        ></motion.canvas>
                        
                        <motion.canvas
                            className={"w-[900px] h-auto absolute rounded-3xl"}
                            style={{
                                opacity: imageThreeOpacitySpring,
                                // x: imageThreeXSpring
                                rotateY: imageThreeXSpring,
                                boxShadow: '0 0 300px -50px rgba(35, 49, 251, 0.75)'
                            }}
                            ref={canvasRefs[2]}
                        ></motion.canvas>
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
            
            </div>
        </div>
    
    )
}

export default ScrollAnimation;