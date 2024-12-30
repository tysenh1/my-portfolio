

function GitHubProject({
    repoTitle,
    repoDescription,
    languages,
    isPublic,
    repoLink
                       }: {
    repoTitle: string,
    repoDescription: string,
    languages: string[],
    isPublic: boolean,
    repoLink: string
}) {
    
    
    return (
        <div className={" h-56 px-10 mb-12"}>
            <div className={"rounded-xl border-2 border-gray-300 bg-gray-300 bg-opacity-20 w-full h-full px-4"}>
                <div className={"h-16 flex items-center"}>
                    <h3 className={"text-white text-xl"}>{repoTitle}</h3>
                </div>
                
                
                <div className="h-[1px] bg-white mx-6"></div>
                <p className={"text-white mt-4 mb-4"}>{repoDescription}</p>
                
                {languages.map((tech: string) => {
                    return (
                        <div
                            className={"border-2 border-gray-300 px-1 py-0.5 justify-center items-center inline-flex rounded-lg mx-1 top-0 mb-2"}
                        >
                            <p className={"text-white text-sm"}>{tech}</p>
                        </div>
                    )
                })}

            
            </div>
        </div>
    
    )
}

export default GitHubProject