import React from "react";
import {ProjectData} from "../sidebar/project";
import Postit from "../../../components/Postit";
import OldImage from "../../../components/OldImage";
import Skills from "../../../components/Skills";
import YouTubVideo from "../../../components/YouTubeVideo";

export const LymmzyWar: ProjectData = {
    title: "LymmzyWar",
    description: "LymmzyWar was my first realtime multiplayer mobile game for iOS and Android.",
    thumbnail: "/images/lymmzywar/ad.jpg",
    date: "2019",
    information: [
        <Postit className={"xl:col-span-2"}>
            LymmzyWar was my first <b>realtime multiplayer mobile game</b> for iOS and Android. The goal was to take
            over the
            towers of
            other players, and if you won, you moved up in the league.
        </Postit>,
        <OldImage src={"/images/lymmzywar/appstore.jpg"} alt={"App Store"}/>,
        <Skills skills={
            [
                "Unity",
                "C#",
                "Java",
                "MySQL",
                "Stream Sockets",
                "Twitch API",
            ]
        }/>,
        <Postit className={"xl:col-span-2"}>
            Through LymmzyWar, I was able to significantly improve my understanding of the client-server principle.
        </Postit>,
        <YouTubVideo videoId={"rVx5-Hobo64"} alt={"Gameplay"} className={"xl:col-span-2 xl:row-span-2"}/>,
        <Postit>
            Later, I created a version for an interactive Twitch stream. In this version, viewers could participate
            using commands.
        </Postit>,
        <OldImage src={"/images/lymmzywar/twitch.jpg"} alt={"Twitch Stream"}/>,
    ]
}
