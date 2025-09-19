import React, {MutableRefObject, RefObject} from "react";


function GitHubProject({
    repoTitle,
    repoDescription,
    languages,
    isPublic,
    repoLink,
    
    refs,
    techPopupParentRef,
    isAnimated,
    setIsAnimated,
    setPopupWidth,
    setTechIndex,
    activeIndex,
    setActiveIndex
                       }: {
    repoTitle: string,
    repoDescription: string,
    languages: object[],
    isPublic: boolean,
    repoLink: string,
    
    refs: MutableRefObject<(HTMLDivElement | null)[]>,
    techPopupParentRef: RefObject<HTMLDivElement>,
    isAnimated: boolean,
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>,
    setPopupWidth: React.Dispatch<React.SetStateAction<number>>,
    setTechIndex: React.Dispatch<React.SetStateAction<number>>,
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
        }
        
    }

    
    
    
    return (
        <a className={`h-auto px-10 mb-12 ${isPublic ? 'cursor-pointer' : ''}`} href={isPublic ? repoLink : undefined} target={'_blank'}>
            <div className={"rounded-xl border-2 border-gray-300 bg-gray-300 bg-opacity-15 w-full h-full px-4"}>
                <div className={"h-16 flex items-center"}>
                    <h3 className={"text-white text-xl"}>{repoTitle}</h3>
                </div>
                
                
                <div className="h-[1px] bg-white mx-6"></div>
                <p className={"text-white mt-4 mb-4"}>{repoDescription}</p>
                
                <div className={"mb-4 "}>
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
        </a>
    
    )
}

export default GitHubProject