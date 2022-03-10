import { Fragment, h, render } from "preact";

import { About, Committee, FAQ, Footer, Header, Photos, Sponsors } from "/src/components";

import "./global.scss";

/**
 * Start the application.
 */
const start = (): void => {
    render(
        <Fragment>
            <Header />
            <About />
            <Photos />
            <Sponsors />
            <FAQ />
            <Committee />
            <Footer />
        </Fragment>,
        document.body
    );
};

/**
 * Let's start!
 */
start();
