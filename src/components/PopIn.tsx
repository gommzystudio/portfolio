import {motion} from "framer-motion";

export default function PopIn({children, delay}: { children: any, delay?: number }) {
    //classnames of children
    const className = children.props.className || "";

    return <motion.div className={className}
                       initial={{opacity: 0, scale: 1.2}}
                       animate={{opacity: 1, scale: 1}}
                       transition={{
                           delay: delay || 0,
                       }}
    >
        {children}
    </motion.div>
}
