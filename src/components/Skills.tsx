export default function Skills({skills, className}: { skills: string[], className?: string }) {
    const rotation = Math.round(Math.random() * 10) - 5;

    return <div className={"w-fit h-fit " + className} style={{
        transform: `rotate(${rotation}deg)`,
    }}>
        <h1 className={"text-center handwriting text-md font-bold"}>Technologies I used</h1>
        <div className={"mt-3 flex flex-wrap gap-2"}>
            {skills.map((skill, index) => {
                    return <div key={index} className={"text-sm text-gray-500 bg-gray-100 px-2 py-1 shadow"}
                                style={{
                                    transform: `rotate(${-rotation * (index % 2) ^ 2}deg)`,
                                }}
                    >{skill}</div>
                }
            )}
        </div>
    </div>
}
