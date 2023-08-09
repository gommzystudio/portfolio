import TextLink from "../../../../components/TextLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import React from "react";

export default function Socials() {
    return (
        <div className={"pb-4 text-lg flex gap-4 justify-center items-center"}>
            <TextLink href={"https://www.linkedin.com/in/julianambrozy/"}>
                <FontAwesomeIcon icon={faLinkedin}/>
            </TextLink>
            <TextLink href={"mailto:julian.ambrozy@gmail.com"}>
                <FontAwesomeIcon icon={faAt}/>
            </TextLink>
            <TextLink href={"tel:+4915110026319"}>
                <FontAwesomeIcon icon={faPhone}/>
            </TextLink>
        </div>
    )
}
