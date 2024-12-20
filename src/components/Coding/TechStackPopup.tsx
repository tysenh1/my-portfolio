import techStack from '../../assets/techStackData.json'
import {useEffect, useState} from "react";

function TechStackPopup({index, width, setIsAnimated}: {
    index: number,
    width: number,
    setIsAnimated: Function
}) {

    const [currentWidth, setCurrentWidth] = useState('')
    const stackInfo = techStack[index]
    
    useEffect(() => {
        setCurrentWidth(`${width}px`)
    }, [width])
    
    // console.log(techStack[0])
    return (
        <div className={`w-full h-full rounded-lg overflow-hidden relative`}>
            <div className={`w-[${currentWidth}] h-full rounded-lg absolute p-4`}>
                <div className={"w-full h-auto inline-flex"}>
                    <img src={stackInfo.logoPath} className={"w-10 h-10 my-auto mx-4"}/>
                    <h3 className={"text-white text-4xl font-light my-auto"}>{stackInfo.title}</h3>
                    <img
                        src={"/my-portfolio/x.svg"}
                        className={"w-10 h-10 cursor-pointer ml-auto mr-1"}
                        onClick={() => setIsAnimated(false)}
                    />
                </div>
                <div className="h-[1px] bg-white mx-6 mb-6 mt-4"></div>
                
                <p className={"text-white text-lg mx-6"}>Lorem ipsum odor amet, consectetuer adipiscing elit. Mus metus
                    ultrices
                    malesuada est arcu mattis conubia sagittis iaculis. Neque rutrum ultrices fusce posuere praesent
                    maecenas eleifend tincidunt. Varius dictumst habitant neque; natoque facilisi sodales. Risus ex
                    sociosqu
                    platea curae vestibulum ligula facilisi elementum. Ligula non velit metus sem nascetur facilisis
                    habitant.
                    
                    Dis vivamus auctor eleifend; quam quam praesent suspendisse. Elementum duis mi senectus pharetra
                    fermentum viverra magnis dapibus eros. Ante urna mollis mollis netus lacus nulla porttitor? Sodales
                    porta sapien lacus euismod phasellus scelerisque habitasse odio accumsan. Laoreet eu mauris hac
                    felis
                    nulla ex magnis litora neque. Conubia convallis molestie eu ultrices per bibendum neque etiam. Nam
                    sociosqu sit nascetur natoque interdum varius diam. Aenean morbi lacus suscipit nam fringilla
                    adipiscing. Id ex nulla et tellus consequat. Nulla aliquet sem habitasse morbi maecenas.
                    
                    Erat eleifend non a integer vehicula suspendisse tristique imperdiet. Porttitor ipsum integer sed;
                    aenean sapien habitant. Accumsan consequat suscipit pellentesque fringilla turpis viverra
                    suspendisse
                    aptent mattis. Venenatis scelerisque sit maecenas hac phasellus cubilia vehicula nibh. At blandit
                    interdum accumsan neque sem, eros interdum. Hac dui penatibus vivamus nostra, blandit maecenas.
                    Mattis
                    torquent suspendisse primis fermentum nullam? Auctor condimentum dapibus rhoncus duis, id rutrum
                    facilisis risus. Placerat dis in parturient rhoncus pretium volutpat mollis fringilla?</p>
            
            </div>
        </div>
    
    )
}

export default TechStackPopup