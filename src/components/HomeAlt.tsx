import {useEffect, useState } from 'react';

function HomeAlt() {

    const [isVisible, setIsVisible] = useState(false)
    const [button1Position, setButton1Position] = useState(false)
    const [button2Position, setButton2Position] = useState(false)
    const [button3Position, setButton3Position] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 250);

        const button1Timer = setTimeout(() => {
            setButton1Position(true)
        }, 1000)

        const button2Timer = setTimeout(() => {
            setButton2Position(true)
        }, 1100)

        const button3Timer = setTimeout(() => {
            setButton3Position(true)
        }, 1200)

        return () => {
            clearTimeout(timer)
            clearTimeout(button1Timer)
            clearTimeout(button2Timer)
            clearTimeout(button3Timer)
        }
    }, [])

    return (
        <>
            <div className="grid justify-center">
                <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'} w-[773px] h-[773px] mt-16 animate-fadeInAndUp transition-opacity linear delay-700 duration-0`}>
                    {/* <div className="absolute w-[500px] h-[500px] bg-gray-400 rounded-full none z-10"></div> */}
                    <img src='https://thumbs.dreamstime.com/b/happy-man-okay-sign-portrait-white-background-showing-31418338.jpg' className='absolute w-[500px] h-[500px] rounded-full z-10'/>

                    {/* Red thing sticking out of the main thing for About Me */}
                    <div>
                        <a className={`top-[82px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px] animate-slideRight
                         ${button1Position ? 'left-[387px]' : 'left-[92px]'}`}>
                            <p className="left-[125px] top-[24px] text-[#EE4E4E] font-extralight text-4xl -z-10 absolute">About Me</p>
                            <div className='rounded-full -z-20 absolute w-button-width h-foreground-button-height border-[#EE4E4E] border-4 bg-background'></div>
                        </a>
                        <div className={`top-[126.5px] w-button-width h-[60.5px] bg-[#BE4949] rounded-br-[44px] -z-30 absolute
                            ${button1Position ? 'left-[387px]' : 'left-[92px]'} animate-slideRight`}></div>
                    </div>
                    

                    {/* Green thing sticking out of the main thing for coding */}
                    <a className={`top-[122px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px]
                         ${button2Position ? 'left-[423px]' : 'left-[128px]'} animate-slideRightMore`}>
                        <p className="left-[140px] top-[24px] absolute text-[#48C453] font-extralight text-4xl -z-10">Coding</p>
                        <div className="w-button-width h-foreground-button-height bg-background rounded-full -z-20 absolute border-[#4BF059] border-4"></div>
                    </a>
                    <div className={`top-[251.5px] w-button-width h-[60.5px] bg-[#48C453] rounded-br-[44px] -z-30 absolute
                         ${button2Position ? 'left-[423px]' : 'left-[128px]'} animate-slideRightMore`}></div>

                    {/* Blue thing sticking out of the main thing for guitar */}
                    <a className={`top-[162px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px]
                        ${button3Position ? 'left-[387px]' : 'left-[62px]'} animate-slideRightLate`}>
                        <p className="left-[140px] top-[24px] text-[#5B6EED] font-extralight text-4xl -z-10 absolute">Guitar</p>
                        <div className="w-button-width h-foreground-button-height bg-background rounded-full -z-20 absolute border-[#6389FB] border-4"></div>
                    </a>
                    <div className={`top-[376.5px] w-[380px] h-[60.5px] bg-[#5B6EED] rounded-br-[44px] rounded-bl-[40px] -z-30 absolute
                        ${button3Position ? 'left-[357px]' : 'left-[62px]'} animate-slideRightLateLess`}></div>
                    
                </div>
            </div>
    
            
        </>
    )
}

export default HomeAlt