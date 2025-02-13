import React from "react";
import {ProjectData} from "../sidebar/project";
import Postit from "../../../components/Postit";
import OldImage from "../../../components/OldImage";
import TextLink from "../../../components/TextLink";
import Skills from "../../../components/Skills";

export const LabyMod: ProjectData = {
    title: "LabyMod App",
    description: "I developed the mobile app for LabyMod with Flutter.",
    thumbnail: "/images/labymod/app.jpg",
    date: "2021",
    information: [
        <Postit className={"xl:col-span-2"}>
            <TextLink href={"https://labymod.net"}>LabyMod</TextLink> is a Minecraft modification with millions of
            users. I was on the team for half a year and had the opportunity to develop the mobile app with Flutter.
        </Postit>,
        <Skills skills={
            [
                "Flutter",
                "Dart",
                "Firebase",
                "GitLab",
                "REST-API",
                "OAuth2",
            ]
        }/>,
        <OldImage src={"/images/labymod/app.jpg"} alt={"LabyMod App"}/>,
        <Postit>
            Through the app, LabyMod was able to <b>increase its revenue</b>, as in-app purchases were available.
        </Postit>,
        <OldImage src={"/images/labymod/ratings.jpg"} alt={"4.5 ⭐️ / 87 ratings"}/>,
        <Postit>
            While working with the team at LabyMod, I learned how to properly use GitLab and how to communicate
            professionally
        </Postit>,
    ]
}
