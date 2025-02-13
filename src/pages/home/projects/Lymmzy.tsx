import React from "react";
import {ProjectData} from "../sidebar/project";
import Postit from "../../../components/Postit";
import OldImage from "../../../components/OldImage";
import Skills from "../../../components/Skills";

export const Lymmzy: ProjectData = {
    title: "LYMMZY",
    description: "Lymmzy.com was a Minecraft network with over 100.000 players.",
    thumbnail: "/images/lymmzy/spawn.jpg",
    date: "2017-2022",
    information: [
        <Postit className={"xl:col-span-2"}>
            Lymmzy.com was a <b>Minecraft</b> network that had over <b>100.000 different players</b>. At peak times, 200
            players were
            online simultaneously. Since Minecraft isn't designed for such player numbers, I had to get creative and
            developed a system to distribute the players across various servers without them noticing, still
            allowing them to play together.
        </Postit>,
        <OldImage src={"/images/lymmzy/stats.jpg"} alt={"over 100.000 users"}/>,
        <Skills skills={
            [
                "Java",
                "Waterfall",
                "PaperSpigot",
                "MySQL",
                "Discord API",
                "PHP",
                "HTML & CSS",
                "Bootstrap",
                "JavaScript",
            ]
        }/>,
        <Postit className={"xl:col-span-2"}>
            Thanks to Lymmzy, I greatly <b>improved my Java and SQL skills</b>. Additionally, I learned how to work
            within a
            limited environment (Minecraft) and still create things. I also learned how to keep a 10-member team
            cohesive.
        </Postit>,
        <OldImage src={"/images/lymmzy/tiktok.jpg"} alt={"millions of views on TikTok"}/>,
    ]
}
