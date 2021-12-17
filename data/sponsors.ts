// Create an object, mapping the logo key to the URL out of the bundler.
// This is required as the bundler (currently) cannot currently read the images from the JSON URL's directly.
export const sponsorLogoMap: { [key: string]: URL } = {
    ch: new URL("/static/sponsors/ch.png?as=webp&width=200", import.meta.url),
    tudelft: new URL(
        "/static/sponsors/tudelft.png?as=webp&width=200",
        import.meta.url
    ),
    pwc: new URL("/static/sponsors/pwc.png?as=webp&width=200", import.meta.url),
    cgi: new URL("/static/sponsors/cgi.png?as=webp&width=200", import.meta.url),
    optiver: new URL(
        "/static/sponsors/optiver.png?as=webp&width=200",
        import.meta.url
    ),
    sogeti: new URL(
        "/static/sponsors/sogeti.jpg?as=webp&width=200",
        import.meta.url
    ),
    do: new URL("/static/sponsors/do.png?as=webp&width=200", import.meta.url),
};
