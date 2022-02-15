import { h, FunctionalComponent } from "preact";

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
    </section>
);
