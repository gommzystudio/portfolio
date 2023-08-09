import React from "react";
import {ProjectData} from "../sidebar/project";
import Postit from "../../../components/Postit";
import OldImage from "../../../components/OldImage";
import TextLink from "../../../components/TextLink";
import Skills from "../../../components/Skills";

export const Talent2Go: ProjectData = {
    title: "Azubi2Go",
    thumbnail: "/images/talent2go/team.jpg",
    date: "2022-2023",
    information: [
        <Postit>
            At the StartUp <TextLink href={"https://talent2go.de"}>Talent2Go</TextLink>, one of my projects was the
            apprenticeship job board <TextLink href={"https://azubi2go.de"}>Azubi2Go</TextLink>. Companies can register
            there, post their positions, and students can then apply.
        </Postit>,
        <OldImage src={"/images/talent2go/website.jpg"} alt={"Website"} className={"md:col-span-2 md:row-span-2"}/>,
        <Skills skills={
            [
                "React",
                "TypeScript",
                "Node.js",
                "Next.js",
                "TailwindCSS",
                "Bootstrap",
                "MySQL",
                "GitLab",
                "GPT-4 Api",
            ]
        }/>,
        <Postit className={"md:col-span-2"}>
            At Talent2Go, I got to experience the <b>life of a startup</b> and learned to deal with spontaneous plan
            changes. For example, important tasks were often inserted on the fly.
        </Postit>,
        <OldImage src={"/images/talent2go/meeting.jpg"} alt={"Team"}/>,
    ]
}
