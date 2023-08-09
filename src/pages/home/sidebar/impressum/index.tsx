import React from "react";
import TextLink from "../../../../components/TextLink";

export default function Impressum() {
    return (
        <p className={"mt-20 text-xs text-start monospace"}>
            I created this website in 2 days using React.<br/>
            <TextLink href={"https://github.com/gommzystudio/portfolio"}>You can find the source code on
                GitHub.</TextLink>
            <br/><br/>
            Julian Ambrozy<br/><br/>
            Rheingutstraße <i>thirty-two</i><br/>
            Paradies<br/>
            78462 Constance<br/>
            Germany<br/>
            <br/>
            Phone: (+49) <i>onefiveone</i> 10026319<br/>
            <br/>
            E-Mail: julian.ambrozy<i>(at)</i>gmail.com<br/>
            <br/>
            Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV: Julian Ambrozy
        </p>
    )
}
