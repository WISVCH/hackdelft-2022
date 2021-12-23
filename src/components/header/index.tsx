import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

import icon from "url:/static/logo.png?as=webp&width=500";

/**
 * Renders the header of the site.
 */
export const Header: FunctionalComponent = () => (
    <header class={style.header}>
        <img src={icon} alt="HackDelft" />
        <span>
            <h2>Date: April 30th &amp; May 1st</h2>
            <h3>Location: X Sport &amp; Culture</h3>
        </span>
    </header>
);
