import Project, {ProjectData} from "./project";
import React from "react";
import Impressum from "./impressum";
import Socials from "./socials";

export default function Sidebar({projects, onProjectClick, selectedProject}: {
    projects: ProjectData[],
    onProjectClick: (project: ProjectData) => void,
    selectedProject: ProjectData | null,
}) {
    return (
        <div
            className={"w-full xl:w-96 h-full p-12 pt-6 overflow-scroll overflow-x-hidden bg-gray-100 shadow-lg"}>

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

            <Impressum/>
        </div>
    );
}
