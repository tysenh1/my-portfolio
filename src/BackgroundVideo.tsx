
function BackgroundVideo() {
    return (
        <div className={" absolute -z-50 top-0"}>
            <video autoPlay loop muted preload={"auto"}
                   className="object-cover mask-repeat-no-repeat mask-size-cover mask-image-radial-at-c from-black to-transparent to-50% blur-2xl h-[954px]">
                <source src="https://raw.githubusercontent.com/tysenh1/my-portfolio/refs/heads/main/src/assets/chill-blue-blob-slow-SHORT.mp4" type="video/mp4"/>
            </video>

        </div>
    
    )
}


export default BackgroundVideo