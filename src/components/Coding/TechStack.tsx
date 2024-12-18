

function TechStack() {
    const stackArray = [
        'Python',
        'JavaScript',
        'HTML',
        'CSS',
        'Node.js/TypeScript',
        'GoLang',
        'Django',
        'React.js',
        'TailwindCSS',
        'Framer Motion',
        'Figma',
        'NestJS',
        'TypeORM',
        'Slonik',
        'PostgreSQL',
        'MariaDB',
        'MongoDB',
        'VSCodium',
        'WebStorm',
        'Git/GitHub'
    ]
    
    const tech = stackArray.map((tech) => {
        return (
            <div className={"border-2 border-gray-300 w-auto h-auto p-1 justify-center items-center inline-flex rounded-xl mx-1"}>
                <p className={"text-white text-sm"}>{tech}</p>
            </div>
        
        )
    })
    
    return (
        <div>
            {tech}
        </div>
    )
}

export default TechStack