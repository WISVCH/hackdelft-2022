import { Fragment, h, render } from "preact";

import { FAQ, Footer, Header, Sponsors } from "/src/components";

import "./global.scss";

/**
 * Start the application.
 */
const start = (): void => {
    render(
        <Fragment>
            <Header />
            <Sponsors />
            <FAQ />
            <Footer />
        </Fragment>,
        document.body
    );
};

/**
 * Let's start!
 */
start();
