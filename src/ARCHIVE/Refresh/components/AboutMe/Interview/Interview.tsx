

// @ts-ignore
// None of these arguments are being used if the buttons are at the top of the page but I
// do not care enough right now to take them out
// function Interview({handleLeftClick, handleRightClick, slideCounter}) {

import SectionHeader from "../../SectionHeader.tsx"
import InterviewHeader from './InterviewHeader'


//   return (
//     <div className="pl-64 pr-64">
//       <h1 className="text-white font-2xl">Interview!</h1>
//       <p className="text-white">
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat orci id ante accumsan, at interdum massa fermentum. Maecenas vitae aliquam ex. Nunc suscipit nulla sapien, et ornare elit vulputate vel. Nullam tincidunt eget enim nec blandit. Aliquam sollicitudin, dui ut viverra commodo, diam dolor aliquam massa, at ultricies nibh massa quis massa. Nunc sit amet cursus dui. Sed sit amet mauris sed risus molestie facilisis. Mauris porttitor diam nec imperdiet volutpat. In eu libero vel urna cursus aliquam eget at lorem.

// Proin ut justo elit. Cras facilisis augue vitae odio dapibus, a rutrum metus euismod. Praesent consequat tortor sit amet erat tempus suscipit. Ut ultricies, lectus id consequat pharetra, ligula lorem tristique urna, ut ornare libero sem eu velit. Sed et scelerisque mauris. Praesent sollicitudin porta ante. Phasellus luctus eros non ultricies tristique. Integer maximus nibh aliquam, euismod diam id, facilisis metus. Curabitur at egestas eros. Donec eu efficitur diam, id gravida enim. Nunc vestibulum lacus in neque dictum elementum. In vitae odio id odio auctor interdum a ut erat. Aliquam auctor sagittis magna non scelerisque. Sed neque justo, commodo ut sapien at, mollis rhoncus magna. Maecenas tincidunt pellentesque quam, nec fermentum ante posuere feugiat. Etiam vehicula sodales ligula, a lacinia mauris.

// Aliquam a eros dapibus, volutpat mauris id, viverra justo. Etiam dictum ut orci quis sollicitudin. Nam erat magna, porttitor et dapibus at, gravida et libero. Nulla mi leo, malesuada et ante nec, hendrerit gravida odio. Mauris a viverra ex, quis suscipit sem. Nullam eu ante posuere, laoreet libero vel, convallis elit. Vivamus ac nulla ut dui finibus fermentum. Nunc orci arcu, iaculis porttitor venenatis nec, consequat at lacus.

// Ut porta justo purus, eu feugiat elit rutrum et. Maecenas eu felis quis urna varius vehicula eu vel ligula. Curabitur ultricies nibh lobortis metus varius hendrerit. Pellentesque aliquam viverra hendrerit. Nam eu porttitor eros, id convallis urna. Vivamus semper, lacus vitae consectetur tincidunt, turpis lectus venenatis nisl, ac condimentum massa neque fermentum ligula. Quisque libero urna, vestibulum sit amet felis vel, dictum dapibus magna. Proin risus est, blandit dictum condimentum quis, bibendum sed tellus. Pellentesque tempus sit amet felis non aliquet. Nulla facilisi. Cras blandit quam in dui facilisis, sit amet vehicula mauris scelerisque. Morbi aliquam ornare tellus, sit amet rutrum turpis lacinia ac. In bibendum enim lacus, vitae cursus sem sodales a. Proin lorem nulla, convallis eget mattis ac, sagittis vitae urna. Maecenas in justo id metus suscipit blandit vel blandit libero. Cras ultrices dapibus tristique.

// Morbi id ante at leo placerat bibendum quis nec risus. Cras vitae ligula congue, venenatis velit ac, maximus eros. Proin eu elementum quam. Duis feugiat in turpis at cursus. Maecenas blandit mauris ipsum, id ultrices mauris varius sit amet. Quisque tempor, dolor a auctor tincidunt, tellus quam posuere ligula, vitae laoreet lorem tortor ut nulla. Sed laoreet quis libero elementum vulputate. Nullam a purus nisi. Morbi auctor massa orci, vel lobortis risus congue in. Praesent varius auctor scelerisque.

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat orci id ante accumsan, at interdum massa fermentum. Maecenas vitae aliquam ex. Nunc suscipit nulla sapien, et ornare elit vulputate vel. Nullam tincidunt eget enim nec blandit. Aliquam sollicitudin, dui ut viverra commodo, diam dolor aliquam massa, at ultricies nibh massa quis massa. Nunc sit amet cursus dui. Sed sit amet mauris sed risus molestie facilisis. Mauris porttitor diam nec imperdiet volutpat. In eu libero vel urna cursus aliquam eget at lorem.

// Proin ut justo elit. Cras facilisis augue vitae odio dapibus, a rutrum metus euismod. Praesent consequat tortor sit amet erat tempus suscipit. Ut ultricies, lectus id consequat pharetra, ligula lorem tristique urna, ut ornare libero sem eu velit. Sed et scelerisque mauris. Praesent sollicitudin porta ante. Phasellus luctus eros non ultricies tristique. Integer maximus nibh aliquam, euismod diam id, facilisis metus. Curabitur at egestas eros. Donec eu efficitur diam, id gravida enim. Nunc vestibulum lacus in neque dictum elementum. In vitae odio id odio auctor interdum a ut erat. Aliquam auctor sagittis magna non scelerisque. Sed neque justo, commodo ut sapien at, mollis rhoncus magna. Maecenas tincidunt pellentesque quam, nec fermentum ante posuere feugiat. Etiam vehicula sodales ligula, a lacinia mauris.

// Aliquam a eros dapibus, volutpat mauris id, viverra justo. Etiam dictum ut orci quis sollicitudin. Nam erat magna, porttitor et dapibus at, gravida et libero. Nulla mi leo, malesuada et ante nec, hendrerit gravida odio. Mauris a viverra ex, quis suscipit sem. Nullam eu ante posuere, laoreet libero vel, convallis elit. Vivamus ac nulla ut dui finibus fermentum. Nunc orci arcu, iaculis porttitor venenatis nec, consequat at lacus.</p>
//       {/* Uncomment this div to put the buttons at the bottom of the page */}
//       {/* <div className="relative w-full flex justify-center mt-4">
//         <SlideButton handleClick={handleLeftClick} slideCounter={slideCounter} label={'left'}/>
//         <SlideButton handleClick={handleRightClick} slideCounter={slideCounter} label={'right'}/>`
//       </div> */}
      
//     </div>
//   )
// }

// export default Interview

// @ts-ignore
function Interview() {


  return (
      <div
          className={`pl-64 pr-64 text-white [&_p]:mb-12 [&_p]:mx-12 [&_p]:leading-relaxed`}>
          <SectionHeader sectionText={'Interview'}/>
          <span className="text-gray-500 text-base italic font-roboto font-light ml-6">Interview questions were written by generative AI.</span>
          <div className="h-[1px] bg-white mx-6 my-6"></div>
          <InterviewHeader headerText={'What is your greatest strength and weakness?'}/>
          
          <p>My greatest strength is either my adaptability or my motivation to learn new things. My role at my current
              job got switched without any notice about a year and a half ago and I went from serving tables in the
              dining room to taking up room service and doing more advanced cleanup jobs. Instead of complaining about
              it and trying to stay where I was at, I simply agreed and then started on my new tasks and picked
              everything up very quicky. I did so well for my first time that I ended up sticking with that new role for
              around 3 months before being moved back to the dining room. </p>
          <p>As for weaknesses, the biggest thing that I've been working to improve is my communication skills,
              especially in situations that I need external help in.
              A year or two ago if I ran into a coding issue or got overwhelmed in the dining room, I most likely
              wouldn't ask for any help from group members or co-workers and it would cause a lot of stress for me and
              some backlog in the dining room if a lot of tenants are coming down to eat. Currently, I've come a long
              way and I am much more likely to communicate these issues with group members/instructors/co-workers and my
              school and work life has been a lot smoother and manageable.
          </p>
          <div className="h-[1px] bg-white mx-6 my-6"></div>
          <InterviewHeader headerText={'How do you prioritize your tasks when you have multiple deadlines?'}/>
          <p>First, I would evaluate the tasks and figure out which tasks will take longer to complete and which tasks
              have a higher priority. For example, if I have 2 tasks to do and one of them is a very length and
              complicated task but one is very simple like writing a follow up email, I will most likely write the email
              first to avoid mixing the stress from the length task in when writing the email. The deadlines of the
              tasks are also important too, so if the email needed to be written in the next week or two but the company
              is behind with the lengthy task and it needs to be completed as soon as possible, then I will leave the
              email until later. </p>
          
          <div className="h-[1px] bg-white mx-6 my-6"></div>
          <InterviewHeader
              headerText={'If you were assigned a task that you felt was outside your expertise, what steps would you take to complete it successfully?'}/>
          <p>Assuming it isn't completely outside my expertise, like getting an accountant to create a website, I would
              evaluate the task and figure out what specifically I need to research and try to find similar skills
              needed that I already possess. After that, I would contact whoever assigned the task for me and ask for
              guidance on where to learn and develop the skills I need for the task, as well as ask for extra time to
              learn if I feel that's needed. I would then break down the task and assign deadlines to myself for each
              small part, making sure they are achievable but still allow a bit of wiggle room in case one step takes
              longer than expected. After the task is completed, I would take some time outside of work to further
              research the new material I learned and develop the new skills acquired to ensure that I retain everything
              new from the task.</p>
      </div>
  
  
  )
}

export default Interview