import { animate, motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="pl-48 pr-48 mt-40 mb-40">
      {/* <motion.h2
        className="text-white text-5xl font-light font-roboto mb-8"
        initial={{x: -70, opacity: 0}}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2> */}
      <h2 className="text-white text-5xl font-light font-roboto mb-8">
        About Me
      </h2>
      <h3 className="text-white text-3xl font-light font-roboto mb-4">
        Profile
      </h3>
      <ul className="list-none text-white font-roboto [&_p]:m-6 font-light mb-12">
        <li><p>Completing Red River Polytechnic's Application Development and Delivery (AD&D) program.</p></li>
        <li><p>Over 2 years of combined experience with coding languages including Python and JavaScript/TypeScript as well as relational databases using PostgreSQL.</p></li>
        <li><p>7 months of combined experience with ORMs, query builders and raw SQL database drivers in TypeScript.</p></li>
        <li><p>2+ years of combined experience using GitHub and Git Bash for coding projects and as part of the AD&D program.</p></li>
        <li><p>Team collaboration and leadership skills gained from coding side projects and group projects in the AD&D program.</p></li>
      </ul>
      <h3 className="text-white text-3xl font-light font-roboto mb-4">Education</h3>
      <ul className="list-none text-white font-roboto font-light">
        <li className="m-6"><p>Application Development and Delivery</p><p className="float-right">January 2024-Present</p></li>
        <li className="m-6"><p>Expected Completion Date:</p><p className="float-right">April 2026</p></li>
        <li className="m-6"><p>Red River College Polytechnic</p><p className="float-right">Winnipeg, Manitoba</p></li>
      </ul>
      <h3 className="text-white text-3xl font-light font-roboto mb-4">Experience</h3>
      <ul>
        <li><p>Server</p><p>October 2021-Present</p></li>
        <li><p>Seine River Retirement Residence</p><p>Winnipeg, Manitoba</p></li>
        <li><p></p></li>
      </ul>
    </div>
  );
}

export default AboutMe;
