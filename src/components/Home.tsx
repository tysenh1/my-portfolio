import { useEffect, useState } from "react";

function Home() {
  const [animationState, setAnimationState] = useState('animate-paused')


  async function infoAnimationDelay() {
    while (true) {
      await new Promise((resolve) => {
        setTimeout(() => {setAnimationState('animate-paused'), resolve('')}, 1475)
      })
      await new Promise((resolve) => {
        setTimeout(() => {setAnimationState(''), resolve('')}, 4000)
      })
    }
  }

  useEffect(() => {
    infoAnimationDelay()
  }, []);

  return (
    <>
      <div className="grid justify-center">
        <div
          className="relative opacity-0 w-[773px] h-[773px] mt-16 animate-fadeInAndUpTop transition-opacity linear delay-700 duration-0"
        >
          <div className="absolute w-[500px] h-[500px] bg-gray-950 rounded-full none z-10 justify-center items-center object-cover mask-repeat-no-repeat mask-image-[url(src/assets/black-circle.svg)] mask-size-cover grid overflow-hidden">
            <div className={`absolute w-[500px] h-[500px] animate-mainContentInfo ${animationState}`}>

              {/* First slide */}
              <div className="relative top-[128px]">
                <p className="text-white text-4.5xl grid font-bold font-robotoMono animate-fadeInAndUpDelay mb-10">
                  <span className="mx-auto m-1">Hello, my</span>
                  <span className="mx-auto m-1">name is Tysen</span>
                </p>
                <p className="text-white text-4.5xl grid font-bold font-robotoMono mt-10">
                  <span className="mx-auto m-1">I'm a backend web</span>
                  <span className="mx-auto m-1">developer</span>
                </p>
              </div>

              {/* Second slide */}
              <div className="left-[640px] bottom-[128px] relative">
              <p className="text-white text-4.5xl grid font-bold font-robotoMono animate-fadeInAndUpDelay mb-10">
                  <span className="mx-auto m-1">I have been</span>
                  <span className="mx-auto m-1">coding websites</span>
                </p>
                <p className="text-white text-4.5xl grid font-bold font-robotoMono mt-10">
                  <span className="mx-auto m-1">for a total of</span>
                  <span className="mx-auto m-1">2 years</span>
                </p>
              </div>

              {/* Third slide */}
              <div className="relative bottom-[768px] left-[640px]">
              <p className="text-white text-4.5xl grid font-bold font-robotoMono animate-fadeInAndUpDelay mb-10">
                  <span className="mx-auto m-1">using libraries</span>
                  <span className="mx-auto m-1">such as Django,</span>
                </p>
                <p className="text-white text-4.5xl grid font-bold font-robotoMono mt-10">
                  <span className="mx-auto m-1">Nest.js, Slonik,</span>
                  <span className="mx-auto m-1">and React.js</span>
                </p>
              </div>

              {/* Fourth slide */}
              <div className="bottom-[1016px] relative">
              <p className="text-white text-4.5xl grid font-bold font-robotoMono animate-fadeInAndUpDelay -mb-3">
                  <span className="mx-auto m-1">Click one</span>
                  <span className="mx-auto m-1">of the buttons</span>
                </p>
                <img src="https://img.icons8.com/?size=100&id=99266&format=png&color=FFFFFF" className="mx-auto w-[72px] h-[72px]"></img>
                <p className="text-white text-4.5xl grid font-bold font-robotoMono -mt-5">
                  <span className="mx-auto m-1">to learn more</span>
                  <span className="mx-auto m-1">about me</span>
                </p>
              </div>
              
            </div>
          </div>

          {/* Red thing sticking out of the main thing for About Me */}
          <div>
            <a
              className="top-[82px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px] animate-slideRight left-[92px]"
            >
              <p className="left-[120px] top-[24px] text-[#EE4E4E] font-normal text-3xl -z-10 absolute font-robotoMono">
                About Me
              </p>
              <div className="rounded-full -z-20 absolute w-button-width h-foreground-button-height border-[#ff4c4c] border-4 bg-background"></div>
            </a>
            <div
              className="top-[126.5px] w-button-width h-[60.5px] bg-[#BE4949] rounded-br-[44px] -z-30 absolute left-[92px] animate-slideRight"
            ></div>
          </div>

          {/* Green thing sticking out of the main thing for coding */}
          <a
            className="top-[122px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px] left-[129px] animate-slideRightMore"
          >
            <p className="left-[135px] top-[24px] absolute text-[#48C453] font-normal text-3xl -z-10 font-robotoMono">
              Coding
            </p>
            <div className="w-button-width h-foreground-button-height bg-background rounded-full -z-20 absolute border-[#4BF059] border-4"></div>
          </a>
          <div
            className="top-[251.5px] w-button-width h-[60.5px] bg-[#48C453] rounded-br-[44px] -z-30 absolute left-[128px] animate-slideRightMore"
          ></div>

          {/* Blue thing sticking out of the main thing for guitar */}
          <a
            className="top-[162px] w-button-width h-foreground-button-height block relative rounded-full active:translate-y-1 active:-translate-x-[0.5px] left-[62px] animate-slideRightLate"
          >
            <p className="left-[135px] top-[24px] text-[#5B6EED] font-normal text-3xl -z-10 absolute font-robotoMono">
              Guitar
            </p>
            <div className="w-button-width h-foreground-button-height bg-background rounded-full -z-20 absolute border-[#6389FB] border-4"></div>
          </a>
          <div
            className="top-[376.5px] w-[380px] h-[60.5px] bg-[#5B6EED] rounded-br-[44px] rounded-bl-[40px] -z-30 absolute left-[62px] animate-slideRightLateLess"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Home;
