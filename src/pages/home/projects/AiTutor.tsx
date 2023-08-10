import React from "react";
import {ProjectData} from "../sidebar/project";
import Postit from "../../../components/Postit";
import OldImage from "../../../components/OldImage";
import TextLink from "../../../components/TextLink";
import Skills from "../../../components/Skills";

export const AiTutor: ProjectData = {
    title: "AiTutor",
    thumbnail: "/images/aitutor/newspaper.jpg",
    date: "2023",
    information: [
        <Postit>
            With the help of the AiTutor app, students can have their <b>homework explained to them</b>. You can chat
            with an
            AI that can do calculations and research for you.
        </Postit>,
        <OldImage src={"/images/aitutor/charts.jpg"} alt={"1st learning charts"}
                  className={"xl:col-span-2 xl:row-span-2"}/>,
        <Skills skills={
            [
                "HTML & CSS",
                "TailwindCSS",
                "TypeScript",
                "ReactJS",
                "CapacitorJS",
                "NextJS",
                "NodeJS",
                "MySQL",
                "Serverless Functions",
                "Swift",
                "Java",
                "GPT-4 Api",
            ]
        }/>,
        <Postit className={"xl:col-span-2"}>
            Through AiTutor, I learned how to deal with many different types of devices and how to quickly solve serious
            problems. Additionally, for the first time, I programmed something <b>natively for iOS and Android</b> since
            text
            recognition is only possible natively.
        </Postit>,
        <OldImage src={"/images/aitutor/stats.jpg"} alt={"over 100.000 users"}/>,
        <OldImage src={"/images/aitutor/appstore.jpg"} alt={"4.5 ⭐️ / 800 ratings"}/>,
        <Postit>
            A few days after the launch, the project was featured in newspaper articles and on TV.
            <TextLink
                className={"block"}
                href={"https://www.stuttgarter-zeitung.de/inhalt.hausaufgaben-app-aitutor-18-jaehriger-aus-ostfildern-entwickelt-hausaufgabenapp.bc97e1f7-3fdc-45ab-a19c-bf2534be8fac.html"}>
                Stuttgarter Zeitung
            </TextLink>
        </Postit>,
    ]
}
