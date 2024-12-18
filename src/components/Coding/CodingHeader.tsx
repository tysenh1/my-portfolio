

function ResumeHeader({headerText}: {
    headerText: string
}) {
    return (
        <>
            <h3 className="text-white text-3xl font-light font-roboto mb-8">{headerText}</h3>
            <div className="h-[1px] bg-white mx-6 my-6"></div>
        </>
    )
}

export default ResumeHeader