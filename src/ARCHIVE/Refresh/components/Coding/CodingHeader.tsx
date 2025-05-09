function CodingHeader({headerText}: {headerText: string}) {
    return (
        <>
            <div className="h-px bg-white mx-6 my-6"></div>
            <h3 className="text-white text-3xl font-light font-roboto mb-8">{headerText}</h3>
            <div className="h-px bg-white mx-6 my-6"></div>
        </>
    )
}

export default CodingHeader