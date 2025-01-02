import React, {MutableRefObject, RefObject} from "react";

function GitHubProject({
    repoTitle,
    repoDescription,
    languages,
    isPublic,
    repoLink,
    
    animationStates,
    refs,
    techPopupParentRef,
    isAnimated,
    setIsAnimated,
    popupWidth,
    setPopupWidth,
    techIndex,
    setTechIndex,
    stackArray,
    activeIndex,
    setActiveIndex
                       }: {
    repoTitle: string,
    repoDescription: string,
    languages: object[],
    isPublic: boolean,
    repoLink: string,
    
    animationStates: object,
    refs: MutableRefObject<(HTMLDivElement | null)[]>,
    techPopupParentRef: RefObject<HTMLDivElement>,
    isAnimated: boolean,
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>,
    popupWidth: number,
    setPopupWidth: React.Dispatch<React.SetStateAction<number>>,
    techIndex: number,
    setTechIndex: React.Dispatch<React.SetStateAction<number>>,
    stackArray: string[],
    activeIndex: number | null,
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
}) {
    
    
    const handleClick = (index: number) => {
        setTechIndex(index)
        if (refs.current[index]) {
            setActiveIndex(activeIndex === index ? null : index)
            
        }
        if (techPopupParentRef.current) {
            setPopupWidth(techPopupParentRef.current.offsetWidth)
            // console.log(techPopupParentRef.current.offsetWidth)
        }
        
    }

    
    
    
    return (
        <div className={" h-56 px-10 mb-12"}>
            <div className={"rounded-xl border-2 border-gray-300 bg-gray-300 bg-opacity-15 w-full h-full px-4"}>
                <div className={"h-16 flex items-center"}>
                    <h3 className={"text-white text-xl"}>{repoTitle}</h3>
                </div>
                
                
                <div className="h-[1px] bg-white mx-6"></div>
                <p className={"text-white mt-4 mb-4"}>{repoDescription}</p>
                
                {languages.map((tech: object) => {
                    return (
                        <div
                            className={"border-2 border-gray-300 px-1 py-0.5 justify-center items-center inline-flex rounded-lg mx-1 top-0 mb-2 cursor-pointer"}
                            onClick={() => {
                                setIsAnimated(isAnimated ? false : true)
                                handleClick(Number(Object.keys(tech)[0]))
                            }}
                            key={Number(Object.keys(tech)[0])}
                        >
                            <p className={"text-white text-sm"}>{Object.values(tech)[0]}</p>
                        </div>
                    )
                })}

            
            </div>
        </div>
    
    )
}

export default GitHubProject