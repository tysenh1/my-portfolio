import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import TechStack from "./TechStack.tsx";
import CodingHeader from "./CodingHeader.tsx";
import SectionHeader from "../SectionHeader.tsx";
import GitHubProject from "./GitHubProject.tsx"
import techStackData from "../../assets/techStackData.json"


function Coding({setPageHeight}: {setPageHeight: (height: number) => void}) {
    const codingRef = useRef<HTMLDivElement>(null)
    // const [popupWidth, setPopupWidth] = useState(0)
    const [techStackPopupWidth, setTechStackPopupWidth] = useState(0)
    const techStackArray: string[] = []
    
    techStackData.map((value) => {
        techStackArray.push(value.title)
    })
    
    
    
    const variants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 100, y: 0 }
    }
    
    useEffect(() => {
        if (codingRef.current) {
            const observer = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    if (entry.target === codingRef.current) {
                        setPageHeight(entry.contentRect.height + 96);
                    }
                }
            });
            
            observer.observe(codingRef.current);
            
            return () => observer.disconnect();
        }
    }, [codingRef]);
    
    
    
    
    const techStackAnimationStates = {
        initial: {
            display: 'none',
            height: '0px',
            width: '0px'
        },
        heightInitial: {
            height: 'auto'
        },
        heightAnimate: {
            height: ['72px', '400px', '400px'],
            marginTop: ['12px', '24px', '24px'],
            transition: {
                duration: 0.75,
                times: [0, 0.4, 1]
            }
        },
        heightNotAnimated: {
            height: ['400px', '400px', '72px'],
            marginTop: ['24px', '24px', '12px'],
            transition: {
                duration: 0.75,
                times: [0, 0.6, 1]
            }
            
        },
        widthAnimate: {
            display: 'flex',
            width: ['0%', '0%', `${techStackPopupWidth}px`],
            marginTop: ['24px', '24px', '12px'],
            height: ['0px', '400px', '400px'],
            transition: {
                duration: 0.75,
                times: [0, 0.4, 1]
            }
        },
        notAnimated: {
            display: 'none',
            height: ['400px', '400px', '0px'],
            marginTop: ['24px', '24px', '12px'],
            width: ['100%', '0%', '0%'],
            
            transition: {
                duration: 0.75,
                times: [0, 0.6, 1]
            }
        }
    }
    
    const techStackRefs = useRef<(HTMLDivElement | null)[]>([])
    const [techStackActiveIndex, setTechStackActiveIndex] = useState<number | null>(null)
    const techPopupParentRef = useRef<HTMLDivElement>(null)
    const [isTechStackAnimated, setIsTechStackAnimated] = useState<boolean>(false)
    const [techIndex, setTechIndex] = useState(0)
    
    // const techStackArray = [
    //     'Python',
    //     'JavaScript',
    //     'HTML',
    //     'CSS',
    //     'Node.js/TypeScript',
    //     'GoLang',
    //     'SQL',
    //     'Django',
    //     'React.js',
    //     'TailwindCSS',
    //     'Framer Motion',
    //     'Figma',
    //     'NestJS',
    //     'TypeORM',
    //     'Slonik',
    //     'PostgreSQL',
    //     'MariaDB',
    //     'MongoDB',
    //     'VSCode',
    //     'WebStorm',
    //     'Git/GitHub'
    // ]
    
    
    
    
    
    
    
    return (
        <motion.div
            className={"relative w-full h-auto my-12"}
            variants={variants}
            animate={'animate'}
            // initial={'initial'}
            transition={{
                duration: 0.5,
                ease: 'easeOut'
            }}
            ref={codingRef}
        >

            {/*<div className={"w-full flex justify-center"}>*/}
            {/*    <h1 className="text-white text-5xl font-light font-roboto mb-8">Coding</h1>*/}
            {/*</div>*/}
            <div className={"mx-40"}>
                <SectionHeader sectionText={"Coding"}/>
                
                <div className="h-[1px] bg-white mx-6 my-6"></div>
                <h3 className="text-white text-3xl font-light font-roboto mb-2 mt-8">My Tech Stack</h3>
                {/*<div className="h-[1px] bg-white mx-6 mt-6"></div>*/}
                
                <TechStack
                    animationStates={techStackAnimationStates}
                    refs={techStackRefs}
                    techPopupParentRef={techPopupParentRef}
                    isAnimated={isTechStackAnimated}
                    setIsAnimated={setIsTechStackAnimated}
                    popupWidth={techStackPopupWidth}
                    setPopupWidth={setTechStackPopupWidth}
                    techIndex={techIndex}
                    setTechIndex={setTechIndex}
                    stackArray={techStackArray}
                    activeIndex={techStackActiveIndex}
                    setActiveIndex={setTechStackActiveIndex}
                />
                
                <CodingHeader headerText={'My Projects'}   />
                
                <div className={"grid-cols-3 grid col-auto"}>
                    <GitHubProject
                        repoTitle={"my-portfolio"}
                        repoDescription={"This is a personal portfolio that showcases my programming projects, skills, and experiences as a web developer, and whatever other cool stuff I feel like putting on here."}

                        // languages={['TypeScript', 'HTML', 'TailwindCSS', 'React.js', 'WebStorm', 'Git/Github']}
                        languages={[
                            {2: 'HTML'},
                            {4: 'TypeScript'},
                            {8: 'React.js'},
                            {19: 'WebStorm'},
                            {20: 'Git/GitHub'}
                            
                        ]}

                        isPublic={true}
                        repoLink={'https://github.com/tysenh1/my-portfolio'}
                        
                        refs={techStackRefs}
                        techPopupParentRef={techPopupParentRef}
                        isAnimated={isTechStackAnimated}
                        setIsAnimated={setIsTechStackAnimated}
                        setPopupWidth={setTechStackPopupWidth}
                        setTechIndex={setTechIndex}
                        activeIndex={techStackActiveIndex}
                        setActiveIndex={setTechStackActiveIndex}
                    />
                    
                    <GitHubProject
                        repoTitle={"ftu-tracker"}
                        repoDescription={"A web app for tracking players stats for the game Valorant."}

                        
                        languages={[
                            {0: 'Python'},
                            {1: 'JavaScript'},
                            {2: 'HTML'},
                            {3: 'CSS'},
                            {4: 'TypeScript'},
                            {5: 'Go'},
                            {6: 'SQL'},
                            {7: 'Django'},
                            {11: 'Figma'},
                            {12: 'NestJS'},
                            {13: 'TypeORM'},
                            {14: 'Slonik'},
                            {15: 'PostgreSQL'},
                            {17: 'MongoDB'},
                            {18: 'VSCode'},
                            {20: 'Git/GitHub'}
                        ]}

                        isPublic={false}
                        repoLink={'idk find it yourself'}
                        
                        refs={techStackRefs}
                        techPopupParentRef={techPopupParentRef}
                        isAnimated={isTechStackAnimated}
                        setIsAnimated={setIsTechStackAnimated}
                        setPopupWidth={setTechStackPopupWidth}
                        setTechIndex={setTechIndex}
                        activeIndex={techStackActiveIndex}
                        setActiveIndex={setTechStackActiveIndex}
                    />
                    
                    
                </div>
                
                
            </div>
            
        
        
        </motion.div>
    
    )
}

export default Coding