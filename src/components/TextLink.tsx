export default function TextLink({href, className, children}: { href: string, className?: string, children: any }) {
    return (
        <a
            className={"text-blue-500 hover:text-blue-700 transition-all " + className}
            href={href}
            target={"_blank"}
            rel={"noreferrer"}
        >
            {children}
        </a>
    );
}
