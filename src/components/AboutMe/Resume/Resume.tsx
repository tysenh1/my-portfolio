
import ResumeHeader from "./ResumeHeader";
import SectionHeader from "../../SectionHeader.tsx";

function Resume() {

  return (
    <div className={`pl-64 pr-64`}>
      <SectionHeader sectionText={'Resume'} />
      
      <ResumeHeader headerText={'Profile'} />

      <ul className="list-none text-white font-roboto [&_li]:my-5 [&_li]:mx-12 font-light mb-12">
        <li><p>Completing Red River Polytechnic's Application Development and Delivery (AD&D) program.</p></li>
        <li><p>Over 3 years of combined experience with coding languages including Python, Go, C#, .NET, JavaScript/TypeScript, SQL, HTML and CSS.</p></li>
        <li><p>Over 2 years of experience as a frontend software engineer building dynamic and responsive websites using HTML, CSS, JavaScript, TypeScript, React.js, TailwindCSS and Framer Motion.</p></li>
        <li><p>1 year of experience as a backend software engineer building RESTful APIs using Python, JavaScript/TypeScript, .NET and Go as well as relational databases using PostgreSQL.</p></li>
        <li><p>3 months of combined experience developing with Microsoft Power Automate and Copilot Studio.</p></li>
        <li><p>3+ years of experience using GitHub and Git Bash for coding projects and in the AD&D program.</p></li>
        <li><p>Placed 1st at Sprint to Innovate 2025.</p></li>
        <li><p>Team collaboration and leadership skills gained from coding side projects and group projects in the AD&D program.</p></li>
        <li><p>Vice-President of the Bits and Bytes Association at Red River College Polytechnic.</p></li>
      </ul>

      <ResumeHeader headerText={'Education'}/>

      <ul className="list-none text-white font-roboto [&_li]:mx-12 mb-12">
        <li className="my-2"><p className="font-semibold text-lg">Application Development and Delivery</p><p className="float-right relative -top-6 font-semibold text-lg">January 2024 - Present</p></li>
        <li className="my-5"><p className="font-light">Expected Completion Date:</p><p className="float-right relative -top-6">April 2026</p></li>
        <li className="my-5"><p>Red River College Polytechnic</p><p className="float-right relative -top-6">Winnipeg, Manitoba</p></li>
      </ul>

      <ResumeHeader headerText={'Experience'} />

      <ul className="list-none text-white font-roboto font-semibold [&_li]:my-2 [&_li]:mx-12 text-lg">
        <li><p>RPA Developer</p><p className="float-right relative -top-6">May 2025-August 2025</p></li>
        <li><p>Manitoba Liquor and Lotteries</p><p className="float-right relative -top-6">Winnipeg, Manitoba</p></li>
      </ul>

      <ul className="list-none text-white font-roboto font-light [&_li]:my-5 [&_li]:mx-12 mb-12">
        <li><p>•	Developed and maintained flows in Microsoft Power Automate to automate record check-in/out and record access request processes in HPE Content Manager using Microsoft Lists data.</p></li>
        <li><p>•	Built the production-ready frontend for a web application using React, TypeScript, TailwindCSS and Vite to populate word templates based on user-entered data and download them to the user’s computer.</p></li>
        <li><p>•	Researched API versioning best practices and created internal guidelines to ensure consistent and scalable API development.</p></li>
        <li><p>•	Conducted technical and feasibility research for potential future projects to help guide early planning and decision-making.</p></li>
        <li><p>•	Worked with RPA and Software Engineering teams to develop automation tools, gather requirements, and present solutions to internal stakeholders for feedback and adoption.</p></li>
      </ul>

      <ul className="list-none text-white font-roboto font-semibold [&_li]:my-2 [&_li]:mx-12 text-lg">
        <li><p>Vice-President</p><p className="float-right relative -top-6">January 2025-December 2025</p></li>
        <li><p>Bits and Bytes Association</p><p className="float-right relative -top-6">Red River College Polytechnic</p></li>
      </ul>

      <ul className="list-none text-white font-roboto font-light [&_li]:my-5 [&_li]:mx-12 mb-12">
        <li><p>•	Organized and led student events and networking opportunities to support the colleges tech community.</p></li>
        <li><p>•	Maintained the club website written in Next.js and TailwindCSS.</p></li>
        <li><p>•	Collaborated closely with the club President to coordinate guest speaker events with industry professionals and college alumni.</p></li>
      </ul>

      <ul className="list-none text-white font-roboto font-semibold [&_li]:my-2 [&_li]:mx-12 text-lg">
        <li><p>Server</p><p className="float-right relative -top-6">October 2021-Present</p></li>
        <li><p>Seine River Retirement Residence</p><p className="float-right relative -top-6">Winnipeg, Manitoba</p></li>
      </ul>

      <ul className="list-none text-white font-roboto font-light [&_li]:my-5 [&_li]:mx-12 mb-12">
        <li><p>•	Provided excellent customer service by efficiently managing tables and ensuring fast order delivery, resulting in above average customer satisfaction.</p></li>
        <li><p>•	Resolved customer complaints and issues in a timely manner, leading to an increase in repeat customers for my section of the dining room.</p></li>
        <li><p>•	Collaborated with kitchen staff and other serves to ensure quick food preparation and delivery.</p></li>
        <li><p>•	Maintained a clean and organized dining room, enhancing the overall dining experience.</p></li>
      </ul>

      <h4 className="text-white font-roboto font-semibold mx-12 text-lg">Coding</h4>

      <ul className="list-none text-white font-roboto font-light [&_li]:my-5 [&_li]:mx-12 mb-12">
        <li><p>•	Designed multiple RESTful APIs over the course of a year using Python, TypeScript and Go to process and store data from the Riot Games API.</p></li>
        <li><p>•	Optimized a backend web application leveraging the latest code libraries to decrease query times by 10 times over the industry standard. </p></li>
        <li><p>•	Applied material from multiple CX/UX and front-end development courses during the development of a coding portfolio, to ensure a seamless and accessible user experience.</p></li>
        <li><p>•	Integrated version control in the process of web app development, managing over 1,100 GitHub commits in the past year.</p></li>
        <li><p>•	Developed a database using PostgreSQL to store information from the Riot Games API, reducing the size of the data by a third.</p></li>
      </ul>

      {/* Uncomment this div to put the buttons at the bottom of the page */}
      {/* <div className="relative w-full flex justify-center mt-4">
        <SlideButton handleClick={handleLeftClick} slideCounter={slideCounter} label={'left'}/>
        <SlideButton handleClick={handleRightClick} slideCounter={slideCounter} label={'right'}/>
      </div> */}
      
    </div>
  )
}

export default Resume
