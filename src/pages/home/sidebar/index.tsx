import Project, {ProjectData} from "./project";
import React, {useEffect, useState} from "react";
import Impressum from "./impressum";
import Socials from "./socials";
import ScrollIndicator from "./ScrollIndictator";

export default function Sidebar({projects, onProjectClick, selectedProject}: {
    projects: ProjectData[],
    onProjectClick: (project: ProjectData) => void,
    selectedProject: ProjectData | null,
}) {
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const target = e.target as HTMLElement;
            setScrollPos(target.scrollTop);
        };

        const container = scrollAreaRef.current;
        container?.addEventListener("scroll", handleScroll);

        return () => {
            container?.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div
            className={"w-full xl:w-96 h-full p-12 pt-6 overflow-scroll overflow-x-hidden bg-gray-100 shadow-lg relative"} ref={scrollAreaRef}>

            <Socials/>

            <h1 className={"text-center handwriting text-2xl font-bold"}>My Pinboard 📌</h1>
            <p className={"text-center text-base text-gray-700"}>Tap on a project to see more.</p>
            <div
                className={"mt-10 grid grid-col gap-20 justify-center items-center relative max-w-xs m-auto"}>
                {projects.map((project, index) => {
                    return <div key={index} onClick={() => onProjectClick(project)}>
                        <Project project={project}/>
                    </div>
                })}
            </div>

            <ScrollIndicator scrollPosition={scrollPos}/>

            <Impressum/>
        </div>
    );
}
