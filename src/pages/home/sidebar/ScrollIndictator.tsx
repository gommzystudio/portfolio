import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

export default function ScrollIndicator({scrollPosition}: { scrollPosition: number }) {
    return (
        <AnimatePresence>
            {scrollPosition < 0.1 && (
                <motion.div
                    initial={{opacity: 1, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 100}}
                    className="absolute top-0 left-0 right-0 h-dvh flex items-end justify-center pb-4 pointer-events-none"
                >
                    <div className={"bg-black text-white rounded-full px-3 py-1 shadow-lg flex items-center gap-2"}>
                        <FontAwesomeIcon icon={faArrowDown}/> Scroll for more
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
