import React from "react";
import {ProjectData} from "../sidebar/project";
import Postit from "../../../components/Postit";
import OldImage from "../../../components/OldImage";
import TextLink from "../../../components/TextLink";
import Skills from "../../../components/Skills";

export const ImpterminUebersicht: ProjectData = {
    title: "ImpfterminÜbersicht",
    description: "ImpfterminÜbersicht is a search engine for vaccination appointments in Germany during the Corona pandemic.",
    thumbnail: "/images/impfterminübersicht/newspaper.jpg",
    date: "2021",
    information: [
        <Postit className={"xl:col-span-2"}>
            In the <b>Corona year of 2021</b>, it was very difficult in Germany to get a vaccination appointment against
            the
            virus. Therefore, I developed a <b>search engine for vaccination appointments</b>, called
            "ImpfterminÜbersicht.de". I created a <b>website and an app for iOS and Android</b>.
        </Postit>,
        <Skills skills={
            [
                "HTML & CSS",
                "Bootstrap",
                "JavaScript",
                "PHP",
                "MySQL",
                "Java (Selenium)",
                "Load Balancing",
                "Flutter",
                "Dart"
            ]
        }/>,
        <OldImage src={"/images/impfterminübersicht/charts.jpg"} alt={"1st health charts"}
                  className={"xl:col-span-2 xl:row-span-2"}/>,
        <OldImage src={"/images/impfterminübersicht/stats.jpg"} alt={"over 1 million users"}/>,
        <Postit>
            At the peak, I was invited by <b>Federal President Frank-Walter Steinmeier</b> to a thank-you celebration
            for
            helpers during the Corona pandemic at Schloss Bellevue.
        </Postit>,
        <Postit>
            A few days after the launch, the project was featured in newspaper articles and on TV.
            <TextLink
                className={"block"}
                href={"https://www.businessinsider.de/gruenderszene/health/17-jaehriger-programmiert-impftermin-suchmaschine-weil-er-seinem-opa-helfen-wollte-d/"}>
                Business Insider
            </TextLink>
        </Postit>,
        <OldImage src={"/images/impfterminübersicht/preview.jpg"} alt={"the website"}
                  className={"xl:col-span-2 xl:row-span-2"}/>,
        <OldImage src={"/images/impfterminübersicht/newspaper.jpg"} alt={"article about the project"}/>,
        <Postit className={"xl:col-span-2"}>
            Through the ImpfterminÜbersicht, I learned how to <b>handle massive user numbers</b> while still
            guaranteeing fast
            loading times. Additionally, I spent a lot of time focusing on <b>UI design</b>. Another essential part was
            the
            <b>crawler</b> for vaccination appointments.
        </Postit>
    ]
}
