import React, {useEffect, useState } from 'react';

function Home() {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 300);

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="grid justify-center">
                <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'} w-[773px] h-[773px] mt-16 animate-fadeInAndUp transition-opacity linear delay-700 duration-0`}>
                    <div className="absolute w-[500px] h-[500px] bg-gray-400 rounded-full none z-10"></div>

                    {/* Red thing sticking out of the main thing for About Me */}
                    <div>
                        <a className="left-[387px] top-[82px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px]">
                            <p className="left-[125px] top-[24px] text-white font-bold text-4xl -z-10 absolute">About Me</p>
                            <div className="rounded-full -z-20 absolute bg-[#EE4E4E] w-button-width h-foreground-button-height"></div>
                        </a>
                        <div className="left-[387px] top-[126.5px] w-button-width h-[60.5px] bg-[#BE4949] rounded-br-[44px] -z-30 absolute"></div>
                    </div>
                    

                    {/* Green thing sticking out of the main thing for coding */}
                    <a className="left-[423px] top-[122px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px]">
                        <p className="left-[140px] top-[24px] absolute text-white font-bold text-4xl -z-10">Coding</p>
                        <div className="w-button-width h-foreground-button-height bg-[#4BF059] rounded-full -z-20 absolute"></div>
                    </a>
                    <div className="left-[423px] top-[251.5px] w-button-width h-[60.5px] bg-[#48C453] rounded-br-[44px] -z-30 absolute"></div>

                    {/* Blue thing sticking out of the main thing for guitar */}
                    <a className="left-[387px] top-[162px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px]">
                        <p className="left-[140px] top-[24px] text-white font-bold text-4xl -z-10 absolute">Guitar</p>
                        <div className="w-button-width h-foreground-button-height bg-[#6389FB] rounded-full -z-20 absolute"></div>
                    </a>
                    <div className="right-[36px] top-[376.5px] w-[380px] h-[60.5px] bg-[#5B6EED] rounded-br-[44px] -z-30 absolute"></div>
                    
                </div>
            </div>
    
            
        </>
    )
}

export default Home