
// @ts-ignore
// This is really shitty code but I don't care enough to fix it
// If I don't redo this entire project I'm shooting myself
function SlideButton({ handleClick, slideCounter, label }) {
  
  return (
    <>
      <div onClick={() => handleClick(slideCounter)} className="mx-auto z-50 text-white">
        {label}
      </div>
    </>
  )
}

export default SlideButton