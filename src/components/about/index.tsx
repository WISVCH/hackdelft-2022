import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

/**
 * Renders the about section.
 */
export const About: FunctionalComponent = () => (
    <section class={style.about}>
        <h2>About</h2>
        <p>
            HackDelft is a hackathon organized on April 30th and May 1st 2022 at
            TU Delft X. It is an all inclusive weekend with multiple challenges
            you can work on. More information will be shared soon, so stay
            tuned!
        </p>
    </section>
);
