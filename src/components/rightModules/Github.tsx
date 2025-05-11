export const Github = () => {
    return (
        <div className={"px-2.5"}>
            <a
                href={"https://github.com/tysenh1"}
                className={"flex w-auto h-full items-center justify-center"}
                target={"_blank"}
            >
                {/* <img className='h-7 w-7 my-2 ml-2 mr-1' src='src/assets/github-mark-white.svg'></img> */}
                <img
                    className={"h-5"}
                    src={"https://raw.githubusercontent.com/tysenh1/tysenh1.github.io/refs/heads/dev/src/assets/GitHub_Logo.png"}
                ></img>
                {/* <img className='my-2 mr-2 ml-1 h-7' src='src/assets/GitHub_Logo_White.png'></img> */}
                <img
                    className={"h-7"}
                    src={"https://raw.githubusercontent.com/tysenh1/tysenh1.github.io/refs/heads/dev/src/assets/github-mark.png"}
                ></img>
            </a>
        </div>
        
    )
}