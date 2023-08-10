import {ProjectData} from "../../sidebar/project";
import React from "react";
import PopIn from "../../../../components/PopIn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default function ProjectInformation({project, close}: { project: ProjectData, close: () => void }) {
    return <div className={"xl:p-6 overflow-x-hidden max-w-3xl m-auto"}>
        <div className={"p-6 relative"}>
            <div className={"flex justify-between items-center"}>
                <div className={"w-6 h-6 block xl:hidden"}/>
                <h1 className={"flex-1 text-center text-2xl font-bold"}>{project.title}</h1>
                <a onClick={close} className={"block xl:hidden"}>
                    <FontAwesomeIcon icon={faTimes} className={"w-6 h-6"}/>
                </a>
            </div>
            <p className={"text-center text-gray-500"}>{project.date}</p>
            <div
                className={"mt-4 text-base grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-4 max-w-xs m-auto xl:max-w-max justify-center items-center"}>
                {project.information.map((information, index) => {
                    return <PopIn key={index} delay={index * 0.1}>
                        {information}
                    </PopIn>
                })}
            </div>
        </div>
    </div>
}
