import React from "react";
import {ProjectData} from "../sidebar/project";
import Postit from "../../../components/Postit";
import OldImage from "../../../components/OldImage";
import Skills from "../../../components/Skills";
import TextLink from "../../../components/TextLink";

export const CryptoFactories: ProjectData = {
    title: "CryptoFactories",
    description: "CryptoFactories was a browser game centered around factories and generators in the form of NFTs on the blockchain.",
    thumbnail: "/images/cryptofactories/logo.jpg",
    date: "2022",
    information: [
        <Postit className={"md:col-span-2"}>
            With CryptoFactories, <TextLink
            href={"https://www.linkedin.com/in/hagen-kanne-298847232/"}>Hagen</TextLink> and I
            wanted to learn how the blockchain works. So, we developed a <b>browser game</b>
            centered around factories and generators in the form of <b>NFTs</b>. These could produce ingame money, and
            players
            had to
            wisely manage their energy. Players aimed to climb the leaderboard.
        </Postit>,
        <OldImage src={"/images/cryptofactories/website.jpg"} alt={"Website"}/>,
        <OldImage src={"/images/cryptofactories/turbine.jpg"} alt={"Wind Turbine Level 9"}/>,
        <Postit>
            We had close to 10,000 users on our Discord and an average of 100 people on our website.
            <TextLink href={"https://opensea.io/collection/cryptofactories"} className={"block"}>
                OpenSea
            </TextLink>
        </Postit>,
        <Skills skills={
            [
                "HTML & CSS",
                "JavaScript",
                "Bootstrap",
                "Node.js",
                "Etherium & Polygon Blockchain",
                "\"Web3\"",
                "MySQL",
            ]
        }/>,
        <OldImage src={"/images/cryptofactories/opensea.jpg"} alt={"Opensea"}
                  className={"md:col-span-2 md:row-span-2"}/>,
        <Postit>
            Even though we quickly realized that we weren't too fond of NFTs and thus stopped the development, we still
            gained a lot of experience. Thanks to CryptoFactories, I understood how a blockchain works.
        </Postit>,
    ]
}
