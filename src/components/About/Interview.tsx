import { animate, motion } from "framer-motion";
import { SlideLeftButton, SlideRightButton } from "./SlideButton";

// @ts-ignore
// None of these arguments are being used if the buttons are at the top of the page but I
// do not care enough right now to take them out
function Interview({handleLeftClick, handleRightClick, slideCounter}) {


  return (
    <div className="pl-64 pr-64">
      <h1 className="text-white font-2xl">Interview!</h1>
      <p className="text-white">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat orci id ante accumsan, at interdum massa fermentum. Maecenas vitae aliquam ex. Nunc suscipit nulla sapien, et ornare elit vulputate vel. Nullam tincidunt eget enim nec blandit. Aliquam sollicitudin, dui ut viverra commodo, diam dolor aliquam massa, at ultricies nibh massa quis massa. Nunc sit amet cursus dui. Sed sit amet mauris sed risus molestie facilisis. Mauris porttitor diam nec imperdiet volutpat. In eu libero vel urna cursus aliquam eget at lorem.

Proin ut justo elit. Cras facilisis augue vitae odio dapibus, a rutrum metus euismod. Praesent consequat tortor sit amet erat tempus suscipit. Ut ultricies, lectus id consequat pharetra, ligula lorem tristique urna, ut ornare libero sem eu velit. Sed et scelerisque mauris. Praesent sollicitudin porta ante. Phasellus luctus eros non ultricies tristique. Integer maximus nibh aliquam, euismod diam id, facilisis metus. Curabitur at egestas eros. Donec eu efficitur diam, id gravida enim. Nunc vestibulum lacus in neque dictum elementum. In vitae odio id odio auctor interdum a ut erat. Aliquam auctor sagittis magna non scelerisque. Sed neque justo, commodo ut sapien at, mollis rhoncus magna. Maecenas tincidunt pellentesque quam, nec fermentum ante posuere feugiat. Etiam vehicula sodales ligula, a lacinia mauris.

Aliquam a eros dapibus, volutpat mauris id, viverra justo. Etiam dictum ut orci quis sollicitudin. Nam erat magna, porttitor et dapibus at, gravida et libero. Nulla mi leo, malesuada et ante nec, hendrerit gravida odio. Mauris a viverra ex, quis suscipit sem. Nullam eu ante posuere, laoreet libero vel, convallis elit. Vivamus ac nulla ut dui finibus fermentum. Nunc orci arcu, iaculis porttitor venenatis nec, consequat at lacus.

Ut porta justo purus, eu feugiat elit rutrum et. Maecenas eu felis quis urna varius vehicula eu vel ligula. Curabitur ultricies nibh lobortis metus varius hendrerit. Pellentesque aliquam viverra hendrerit. Nam eu porttitor eros, id convallis urna. Vivamus semper, lacus vitae consectetur tincidunt, turpis lectus venenatis nisl, ac condimentum massa neque fermentum ligula. Quisque libero urna, vestibulum sit amet felis vel, dictum dapibus magna. Proin risus est, blandit dictum condimentum quis, bibendum sed tellus. Pellentesque tempus sit amet felis non aliquet. Nulla facilisi. Cras blandit quam in dui facilisis, sit amet vehicula mauris scelerisque. Morbi aliquam ornare tellus, sit amet rutrum turpis lacinia ac. In bibendum enim lacus, vitae cursus sem sodales a. Proin lorem nulla, convallis eget mattis ac, sagittis vitae urna. Maecenas in justo id metus suscipit blandit vel blandit libero. Cras ultrices dapibus tristique.

Morbi id ante at leo placerat bibendum quis nec risus. Cras vitae ligula congue, venenatis velit ac, maximus eros. Proin eu elementum quam. Duis feugiat in turpis at cursus. Maecenas blandit mauris ipsum, id ultrices mauris varius sit amet. Quisque tempor, dolor a auctor tincidunt, tellus quam posuere ligula, vitae laoreet lorem tortor ut nulla. Sed laoreet quis libero elementum vulputate. Nullam a purus nisi. Morbi auctor massa orci, vel lobortis risus congue in. Praesent varius auctor scelerisque.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat orci id ante accumsan, at interdum massa fermentum. Maecenas vitae aliquam ex. Nunc suscipit nulla sapien, et ornare elit vulputate vel. Nullam tincidunt eget enim nec blandit. Aliquam sollicitudin, dui ut viverra commodo, diam dolor aliquam massa, at ultricies nibh massa quis massa. Nunc sit amet cursus dui. Sed sit amet mauris sed risus molestie facilisis. Mauris porttitor diam nec imperdiet volutpat. In eu libero vel urna cursus aliquam eget at lorem.

Proin ut justo elit. Cras facilisis augue vitae odio dapibus, a rutrum metus euismod. Praesent consequat tortor sit amet erat tempus suscipit. Ut ultricies, lectus id consequat pharetra, ligula lorem tristique urna, ut ornare libero sem eu velit. Sed et scelerisque mauris. Praesent sollicitudin porta ante. Phasellus luctus eros non ultricies tristique. Integer maximus nibh aliquam, euismod diam id, facilisis metus. Curabitur at egestas eros. Donec eu efficitur diam, id gravida enim. Nunc vestibulum lacus in neque dictum elementum. In vitae odio id odio auctor interdum a ut erat. Aliquam auctor sagittis magna non scelerisque. Sed neque justo, commodo ut sapien at, mollis rhoncus magna. Maecenas tincidunt pellentesque quam, nec fermentum ante posuere feugiat. Etiam vehicula sodales ligula, a lacinia mauris.

Aliquam a eros dapibus, volutpat mauris id, viverra justo. Etiam dictum ut orci quis sollicitudin. Nam erat magna, porttitor et dapibus at, gravida et libero. Nulla mi leo, malesuada et ante nec, hendrerit gravida odio. Mauris a viverra ex, quis suscipit sem. Nullam eu ante posuere, laoreet libero vel, convallis elit. Vivamus ac nulla ut dui finibus fermentum. Nunc orci arcu, iaculis porttitor venenatis nec, consequat at lacus.</p>
      {/* Uncomment this div to put the buttons at the bottom of the page */}
      {/* <div className="relative w-full flex justify-center mt-4">
        <SlideButton handleClick={handleLeftClick} slideCounter={slideCounter} label={'left'}/>
        <SlideButton handleClick={handleRightClick} slideCounter={slideCounter} label={'right'}/>`
      </div> */}
      
    </div>
  )
}

export default Interview

// function Interview() {


//   return (
//     <div className="pl-64 pr-64">
//       <h1 className="text-white font-2xl flex w-auto">Interview!</h1>
      
//     </div>
//   )
// }

// export default Interview