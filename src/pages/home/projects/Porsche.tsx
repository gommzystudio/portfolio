import React from "react";
import {ProjectData} from "../sidebar/project";
import Postit from "../../../components/Postit";
import TextLink from "../../../components/TextLink";
import Skills from "../../../components/Skills";
import YouTubVideo from "../../../components/YouTubeVideo";

export const Porsche: ProjectData = {
    title: "Porsche Engineering",
    thumbnail: "/images/porsche/app.jpg",
    date: "2024",
    information: [
        <Postit className={"xl:col-span-2"}>
            I completed a 6-month internship at <TextLink href={"https://www.porscheengineering.com/en/peg"}>Porsche Engineering</TextLink> in the <b>Functional and System Development</b> department.
        </Postit>,
        <Skills skills={
            [
                "C#",
                "Swift-UI",
                "Kotlin & Android",
                "Swift & iOS",
                "TypeScript",
                "Angular",
                "Git",
                "Python",
            ]
        }/>,
        <YouTubVideo videoId={"BFiRcyvTrDQ"} alt={"Porsche Track Precision App"}
                  className={"xl:col-span-2 xl:row-span-2"}/>,
        <Postit className={"xl:col-span-1"}>
            At Porsche Engineering,
            I had the opportunity to contribute to the <TextLink href={"https://www.youtube.com/watch?v=BFiRcyvTrDQ"}>Porsche Track Precision App</TextLink>. During this time, I learned to work in a professional environment as part of a team and to meet the high standards expected by end customers.
        </Postit>
    ]
}
