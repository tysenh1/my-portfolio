import PageConstruction from "../PageConstruction.tsx";
import {motion} from "framer-motion";
import {useEffect, useRef} from "react";
import TechStack from "./TechStack.tsx";
import CodingHeader from "./CodingHeader.tsx";
import SectionHeader from "../SectionHeader.tsx";


function Coding({setPageHeight}) {
    const codingRef = useRef<HTMLDivElement>(null)
    
    
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
            <PageConstruction />
            {/*<div className={"w-full flex justify-center"}>*/}
            {/*    <h1 className="text-white text-5xl font-light font-roboto mb-8">Coding</h1>*/}
            {/*</div>*/}
            <div className={"mx-40"}>
                <SectionHeader sectionText={"Coding"}/>
                
                <div className="h-[1px] bg-white mx-6 my-6"></div>
                <h3 className="text-white text-3xl font-light font-roboto mb-8">My Tech Stack</h3>
                <div className="h-[1px] bg-white mx-6 mt-6"></div>
                
                <TechStack />
                
                <CodingHeader headerText={'My Projects'}   />
                
                <p className={"text-white text-lg"}>Lorem ipsum odor amet, consectetuer adipiscing elit. Mus metus ultrices malesuada est arcu mattis conubia sagittis iaculis. Neque rutrum ultrices fusce posuere praesent maecenas eleifend tincidunt. Varius dictumst habitant neque; natoque facilisi sodales. Risus ex sociosqu platea curae vestibulum ligula facilisi elementum. Ligula non velit metus sem nascetur facilisis habitant.
                    
                    Dis vivamus auctor eleifend; quam quam praesent suspendisse. Elementum duis mi senectus pharetra fermentum viverra magnis dapibus eros. Ante urna mollis mollis netus lacus nulla porttitor? Sodales porta sapien lacus euismod phasellus scelerisque habitasse odio accumsan. Laoreet eu mauris hac felis nulla ex magnis litora neque. Conubia convallis molestie eu ultrices per bibendum neque etiam. Nam sociosqu sit nascetur natoque interdum varius diam. Aenean morbi lacus suscipit nam fringilla adipiscing. Id ex nulla et tellus consequat. Nulla aliquet sem habitasse morbi maecenas.
                    
                    Erat eleifend non a integer vehicula suspendisse tristique imperdiet. Porttitor ipsum integer sed; aenean sapien habitant. Accumsan consequat suscipit pellentesque fringilla turpis viverra suspendisse aptent mattis. Venenatis scelerisque sit maecenas hac phasellus cubilia vehicula nibh. At blandit interdum accumsan neque sem, eros interdum. Hac dui penatibus vivamus nostra, blandit maecenas. Mattis torquent suspendisse primis fermentum nullam? Auctor condimentum dapibus rhoncus duis, id rutrum facilisis risus. Placerat dis in parturient rhoncus pretium volutpat mollis fringilla?</p>
            </div>
            
        
        
        </motion.div>
    
    )
}

export default Coding