import SectionHeader from "./SectionHeader";

// @ts-ignore
// None of these arguments are being used if the buttons are at the top of the page but I
// do not care enough right now to take them out
function CoverLetter({ handleLeftClick, handleRightClick, slideCounter }) {
  return (
    <div className="pl-64 pr-64 text-white [&_p]:mb-12 [&_p]:mx-12 [&_p]:leading-relaxed">
      <SectionHeader sectionText={"Cover Letter"} />

      <p>
        Welcome to my portfolio! I am a passionate software developer, and I’m
        dedicated to creating user-friendly, robust, and efficient web apps that
        put the user first. I’ve been interested in computer technology for
        around 8 years, and I’ve been particularly interested in the software
        and web development side of things for around 5 years. I’ve observed
        that in recent years many companies have prioritized other concerns over
        user needs, often sacrificing the usability of the application or
        website in the process. I aim to contribute by placing users at the
        forefront and creating software that is first and foremost
        user-friendly.
      </p>

      <p>
        I am currently in the process of completing the Application Development
        and Delivery (AD&D) program at RRC Polytech and am expected to graduate
        in April 2026. I have also completed a few side projects before starting
        the program that involve using industry standard frameworks and
        libraries, as well as new frameworks and libraries to design and develop
        front-end and back-end portions of web applications. My most notable
        project so far is developing the back end for a stats tracker for the
        game Valorant that utilizes the Riot Games API, NestJS, and Slonik. I
        also bring an unyielding motivation and eagerness to work with new and
        existing technology that I am not yet familiar with.
      </p>

      <p>
        I am confident that I can contribute to your company by introducing new
        technologies to existing IT infrastructure which I believe may not be
        leveraged yet. My hands-on experience and refreshed perspective with
        modern coding technologies can help increase the efficiency of front-end
        and back-end systems and streamline the overall development process. I
        am also well versed in the agile software development methodology and
        version control using Git which will allow me to integrate into your
        development processes easily.
      </p>

      {/* REVIEW Come back to this and fix it up, it's alright but could probably be a lot better */}
      <p>
        As someone who is already actively creating user-focused front-end and
        back-end software with new technologies, I look forward to the
        opportunity of working with you to further discuss how I can contribute
        and improve the systems in place at your company. I may be reached on my
        LinkedIn profile or through email at tysenheck@yahoo.ca to further
        discuss. Thank you for the time and consideration you have given my
        portfolio.
      </p>

      {/* Uncomment this div to put the buttons at the bottom of the page */}
      {/* <div className="relative w-full flex justify-center mt-4">
        <SlideButton handleClick={handleLeftClick} slideCounter={slideCounter} label={'left'}/>
        <SlideButton handleClick={handleRightClick} slideCounter={slideCounter} label={'right'}/>
      </div> */}
    </div>
  );
}

export default CoverLetter;

// function CoverLetter() {

//   return (
//     <div className="pl-64 pr-64">
//       <h1 className="text-white font-2xl flex w-auto">Cover Letter!</h1>

//     </div>
//   )
// }

// export default CoverLetter
