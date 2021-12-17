import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

import icon from "url:/static/logo.png?as=webp&width=500";

/**
 * Renders the header of the site.
 */
export const Header: FunctionalComponent = () => (
    <header class={style.header}>
        <img src={icon} alt="HackDelft" />
    </header>
);
