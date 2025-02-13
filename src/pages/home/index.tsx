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
import {Porsche} from "./projects/Porsche";
import {LichtbildManufaktur} from "./projects/LichtbildManufaktur";
import {Helmet} from "react-helmet";

export const Projects = [
    LichtbildManufaktur,
    Porsche,
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
            const project = Projects.find(project => project.title === pathname)
            if (project) {
                setSelectedProject(project)
            }
        }
    }, [])


    return (
        <div className="bg-white h-screen w-screen flex">
            {
                selectedProject &&
                <Helmet>
                    <title>{selectedProject.title} - Julian Ambrozy</title>
                    <link rel="canonical" href={`https://julian-ambrozy.com/${encodeURIComponent(selectedProject.title)}`}/>
                    <meta name="description" content={selectedProject.description}/>
                    <link rel="icon" href={selectedProject.thumbnail}/>
                </Helmet>
            }

            {
                !selectedProject &&
                <Helmet>
                    <title>Julian Ambrozy's Portfolio</title>
                    <link rel="canonical" href="https://julian-ambrozy.com"/>
                    <meta name="description" content={"Hey, I'm Julian Ambrozy, a applied computer science student at the HTWG in Constance (germany)."}/>
                    <link rel="icon" href={"/images/me.jpeg"}/>
                </Helmet>
            }

            <Sidebar projects={Projects} onProjectClick={onProjectClick} selectedProject={selectedProject}/>
            <div
                className={"flex-1"}>
                <AnimatePresence initial={false} mode={"wait"}>
                    {
                        selectedProject &&
                        <div
                            className={"top-0 start-0 right-0 bottom-0 absolute w-screen h-screen bg-white xl:bg-transparent xl:w-full xl:h-full xl:relative overflow-y-scroll"}
                            key={selectedProject?.title}
                        >
                            <ProjectInformation project={selectedProject} close={() => setSelectedProject(null)}/>
                        </div>
                    }
                </AnimatePresence>

                {
                    !selectedProject &&
                    <div className={"flex-1 h-full flex items-center justify-center max-md:hidden"}>
                        <div className={"text-center"}>
                            <h1 className={"text-4xl font-bold"}>Welcome to my Pinboard 👋</h1>
                            <p className={"text-gray-500"}>Tap on a project to see more.</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Home;
