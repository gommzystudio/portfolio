import {ProjectData} from "../sidebar/project";
import React from "react";
import Postit from "../../../components/Postit";
import OldImage from "../../../components/OldImage";
import YouTubVideo from "../../../components/YouTubeVideo";
import TextLink from "../../../components/TextLink";
import Skills from "../../../components/Skills";

export const Lego: ProjectData = {
    title: "Lego Machines",
    description: "I have been building and programming Lego machines since 2012. I have documented a lot of it on YouTube and Instagram.",
    thumbnail: "/images/lego/machine.jpg",
    date: "since 2012",
    information: [
        <Postit>
            Since 2012, I have been building and programming Lego machines. I stopped doing it a few years ago,
            but
            fortunately, I've documented a lot of it on YouTube and Instagram.
        </Postit>,
        <OldImage src={"/images/lego/mcdonalds.jpg"} alt={"Lego with Arduino"}/>,
        <Skills skills={
            [
                "Lego Mindstorms",
                "Arduino",
                "EV3",
                "C# (MonoBrick)",
                "Image Recognition",
            ]
        }/>,
        <YouTubVideo videoId={"q3_QVyuq7Rs"} alt={"Lego McDonald's Machine"}
                     className={"xl:col-span-2 xl:row-span-2"}/>,
        <Postit>
            I gained on Instagram over 50.000 Follower with my Lego Projects.<br/>
            <TextLink href={"https://www.instagram.com/legogommzy/"} className={"block"}>
                @LegoGommzy
            </TextLink>
        </Postit>,
        <OldImage src={"/images/lego/pepsi.jpg"} alt={"Lego with EV3"}/>,
        <OldImage src={"/images/lego/skittles.jpg"} alt={"just mechanical"}/>,
        <Postit className={"xl:col-span-2"}>
            With the EV3, I had my first encounter with programming. Later, I <b>switched to C#</b> to increase my
            productivity, and most recently, I moved to Arduino because it has more components and is much more
            affordable.
        </Postit>
    ]
}
