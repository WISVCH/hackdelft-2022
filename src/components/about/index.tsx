import { h, FunctionalComponent } from "preact";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import { Icon } from "/src/components";

import * as style from "./style.scss";

/**
 * Renders the about section.
 */
export const About: FunctionalComponent = () => (
    <section class={style.about}>
        <h2>About</h2>
        <p>
            Join us on April 30th and May 1st in this all-inclusive 24 hour
            hackathon where you solve fun challenges provided by our partner
            companies, win prizes, and have a good time!
        </p>
        <p>
            Tickets will be sold until the 22nd of April, so make sure to buy a
            ticket now! Then fill in the form{" "}
            <a href="https://wisv.ch/hackdelft" target="_blank">
                here
            </a>
            .
        </p>
        <div>
            <a
                class={style.tickets}
                href="https://ch.tudelft.nl/activities/event/2022/hackdelft-3/"
                target="_blank"
            >
                <Icon icon={faTicket} pad />
                Buy Your Ticket Now!
            </a>
            <a
                class={style.discord}
                href="https://discord.gg/rB2ucUaFnc"
                target="_blank"
            >
                <Icon icon={faDiscord} pad />
                Join Our Discord!
            </a>
        </div>
    </section>
);
