import React, {useEffect} from 'react';
import Sidebar from "./sidebar";
import {ImpterminUebersicht} from "./projects/ImpterminUebersicht";
import {Lego} from "./projects/Lego";
import {ProjectData} from "./sidebar/project";
import {AnimatePresence} from "framer-motion";
import ProjectInformation from "./projects/information";
import {AiTutor} from "./projects/AiTutor";
import {Lymmzy} from "./projects/Lymmzy";
import {LymmzyWar} from "./projects/LymmzyWar";
import {CryptoFactories} from "./projects/CryptoFactories";
import {LabyMod} from "./projects/LabyMod";
import {Talent2Go} from "./projects/Talent2Go";

const projects = [
    AiTutor,
    Talent2Go,
    CryptoFactories,
    LabyMod,
    ImpterminUebersicht,
    LymmzyWar,
    Lymmzy,
    Lego,
];

function Home() {
    const [selectedProject, setSelectedProject] = React.useState<ProjectData | null>(null);

    function onProjectClick(project: ProjectData) {
        //change url
        window.history.pushState({}, "", project.title);
        setSelectedProject(project);
    }

    useEffect(() => {
        //load project from url
        const pathname = decodeURI(window.location.pathname.substring(1));
        if (pathname && !selectedProject) {
            const project = projects.find(project => project.title === pathname)
            if (project) {
                setSelectedProject(project)
            }
        }
    }, [])


    return (
        <div className="bg-white h-screen w-screen flex">
            <Sidebar projects={projects} onProjectClick={onProjectClick} selectedProject={selectedProject}/>
            <div
                className={"flex-1"}>
                <AnimatePresence initial={false} mode={"wait"}>
                    {
                        selectedProject &&
                        <div
                            className={"top-0 start-0 right-0 bottom-0 absolute w-screen h-screen bg-white md:bg-transparent md:w-full md:h-full md:relative overflow-y-scroll"}
                            key={selectedProject?.title}
                        >
                            <ProjectInformation project={selectedProject} close={() => setSelectedProject(null)}/>
                        </div>
                    }

                </AnimatePresence>
            </div>
        </div>
    );
}

export default Home;
