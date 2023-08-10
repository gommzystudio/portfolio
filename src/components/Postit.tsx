export default function Postit({children, className}: { children: any, className?: string }) {
    const rotation = Math.round(Math.random() * 10) - 5;

    return <div className={"w-fit p-6 postit " + className} style={{
        transform: `rotate(${rotation}deg)`,
    }}>
        {children}
    </div>
}
