import React from "react";
import {ProjectData} from "../sidebar/project";
import Postit from "../../../components/Postit";
import Skills from "../../../components/Skills";
import TextLink from "../../../components/TextLink";
import OldImage from "../../../components/OldImage";

export const LichtbildManufaktur: ProjectData = {
    title: "Lichtbild Manufaktur",
    description: "I founded Lichtbild Manufaktur to create personalized 3D-printed models of any location worldwide.",
    thumbnail: "/images/lichtbildmanufaktur/new-york.jpg",
    date: "since 2024",
    information: [
        <Postit className={"xl:col-span-2"}>
            In 2024, I founded <TextLink href={"https://lichtbild-manufaktur.shop/"}>Lichtbild Manufaktur</TextLink> to create personalized 3D-printed models of any location worldwide. Customers can design their unique city or mountain models with just a few clicks.
        </Postit>,
        <OldImage src={"/images/lichtbildmanufaktur/preview.jpg"} alt={"Preview Feature"}/>,
        <OldImage src={"/images/lichtbildmanufaktur/3d-printed-city.jpg"} alt={"3D printed city"} className={"xl:col-span-2 xl:row-span-2"}/>,
        <Postit>
            In just a few months, we received over 500 orders. To meet the demand, I’ve already <b>hired the first team member</b>, and we’re excited to keep growing.
        </Postit>,
        <Skills skills={
            [
                "CAD",
                "TypeScript",
                "NextJS",
                "TailwindCSS",
                "NodeJS",
                "ThreeJS",
                "Ubuntu",
                "Python",
                "Shopify API",
                "Meta Ads",
                "TikTok Ads",
                "3D Printing",
            ]
        }/>,
        <OldImage src={"/images/lichtbildmanufaktur/ratings.png"} alt={"4.7 ⭐️ / 46 ratings"}/>,
        <Postit className={"xl:col-span-2"}>
            The biggest challenge was automating complex CAD processes. I developed a system that prepares any location for printing and provides an instant preview, making customization effortless.
        </Postit>,
    ]
}
