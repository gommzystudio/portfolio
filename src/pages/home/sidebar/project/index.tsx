import React from "react";
import {motion} from "framer-motion";

export type ProjectData = {
    thumbnail: string;
    date: string;
    title: string;
    information: React.ReactNode[];
}

export default function Project({project}: { project: ProjectData }) {
    const [focus, setFocus] = React.useState<boolean>(false);
    const [left, setLeft] = React.useState(Math.round(Math.random() * 40) - 20);
    const [top, setTop] = React.useState(Math.round(Math.random() * 40) - 20);
    const [cardRotation, setCardRotation] = React.useState(Math.round(Math.random() * 20) - 10);
    const rotation = Math.round(Math.random() * 20) - 10;

    function onFocus() {
        setFocus(true)
    }

    function onFocusEnd() {
        setFocus(false)
    }

    return <>
        <motion.div
            className={"origin-center hover:cursor-pointer"}
            initial={{
                rotate: `0deg`,
                translateX: `0px`,
                translateY: `0px`,
                opacity: 0,
                scale: 1.5,
            }}
            whileInView={{
                rotate: focus ? "0" : `${cardRotation}deg`,
                translateX: `${left}px`,
                translateY: `${top}px`,
                opacity: 1,
                scale: 1,
            }}
            viewport={{once: true}}
        >
            <motion.div
                className={"relative bg-gray-200 transition-all shadow-md bottom-0 hover:shadow-xl hover:bg-gray-300 hover:bottom-4"}
                onHoverStart={onFocus}
                onHoverEnd={onFocusEnd}
                onTouchEnd={onFocusEnd}
            >
                <div
                    className={"absolute z-20 top-0 left-0 right-0 bottom-0 photogradient pointer-events-none"}/>

                <div className={"p-6"}>
                    <div
                        className={"border-black border-4 w-full aspect-square overflow-hidden relative pointer-events-none"}>
                        <img className={"w-full h-full object-cover"} src={project.thumbnail}/>
                    </div>

                    <motion.h1
                        key={"title"}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className={"mt-5 w-full text-center text-black text-xl font-bold py-2 hover:cursor-pointer"}
                    >
                        {project.title}
                    </motion.h1>

                    <motion.div
                        animate={
                            {
                                transform: `rotate(${rotation}deg)`,
                            }
                        }
                    >
                        <div
                            className={"w-fit absolute monospace bg-black xl:text-3xl text-xl font-bold text-white px-3 py-1 left-1/2 transform -translate-x-1/2"}
                        >
                            {project.date}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    </>
}

