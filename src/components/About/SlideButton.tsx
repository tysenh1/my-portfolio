
// @ts-ignore
// This is really shitty code but I don't care enough to fix it
// If I don't redo this entire project I'm shooting myself
function SlideLeftButton({ handleClick, slideCounter }) {
  
  return (
    <>
      <div onClick={() => handleClick(slideCounter)} className="mx-auto z-50 text-white">
        {/* TODO set a pointer event for hovering the div */}
        <img src="src\assets\arrow-left.svg" className="w-10"/>
      </div>
    </>
  )
}

// @ts-ignore
function SlideRightButton({ handleClick, slideCounter }) {
  
  return (
    <>
      <div onClick={() => handleClick(slideCounter)} className="mx-auto z-50 text-white">
        {/* TODO set a pointer event for hovering the div */}
        <img src="src/assets/arrow-right.svg" className="w-10"/>
      </div>
    </>
  )
}

export { SlideLeftButton, SlideRightButton }