export default function Button({children, onClick, className, ...props}: {
    children: any,
    onClick: () => void,
    className?: string,
    props?: any
}) {
    return (
        <button
            className={"text-white bg-black font-bold px-5 py-2 hover:cursor-pointer hover:scale-95 transition-all monospace " + className}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
