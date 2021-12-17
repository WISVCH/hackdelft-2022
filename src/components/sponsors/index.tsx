import { h, FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";

import { sponsorLogoMap } from "/data/sponsors";

import sponsorData from "/data/sponsors.json";

import * as style from "./style.scss";

/**
 * Renders the sponsors section.
 */
export const Sponsors: FunctionalComponent = () => {
    const [sponsors, setSponsors] = useState([]);
    useEffect(() => {
        const sponsors: Sponsor[] = sponsorData;
        shuffleArray(sponsorData);
        setSponsors(sponsors);
    }, []);

    return (
        <section class={style.sponsors}>
            <h2>Sponsors</h2>
            <ul class={style.sponsorlist}>
                {sponsors.map((sponsor: Sponsor, i: number) => (
                    <li key={sponsor.logoKey} data-type={sponsor.type}>
                        <a
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener"
                            title={sponsor.title}
                        >
                            <div class={style.img}>
                                <img
                                    src={sponsorLogoMap[
                                        sponsor.logoKey
                                    ].toString()}
                                    alt={sponsor.title}
                                />
                            </div>
                            <p>{sponsor.title}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

/**
 * Randomize the order of an array.
 * @param array The array to randomize.
 */
const shuffleArray = (array: any[]) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

interface Sponsor {
    type: "organisation" | "primary" | "secondary";
    logoKey: string;
    url: string;
    title: string;
}
