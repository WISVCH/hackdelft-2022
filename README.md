# Hackdelft 2022

This repository contains the code required to build the website of HackDelft 2021 / 2021.
The website is completely static, and does not even require JavaScript to view for the visitor.

## Building

To build the website, you are required to have [NodeJS](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/).

To get started, open a console and run `yarn` to install the dependencies.
When this succeeds (it can take a minute), you can run `yarn build` to build the application.
This creates a `/dist` folder, which contains the output files.
Host this on a web server and you'll have yourself a nice little hacked website!

If you want to view the website, the easiest way to do so is to install the dependencies and run `yarn serve`.
This builds the website and starts a http server at [localhost:8000](http://localhost:8000).

## Development

To start the development server, you can just run `yarn start`.
This creates a http server at [localhost:8000](http://localhost:8000), containing the development version of the site.
It also attaches a HMR server, for automatic updating when files change.

## Updating Data

The architecture of this website is designed so the data can be updated by changing some JSON files.
This means that frontend development experience is not required.

This data can be found in `/data`.

### Note on logo's

The logo's can be found in `/static`.
To use the logo's on the website, add the image to `/data/sponsors.ts`.
Follow the excisting format, afterwards the image key can be used in the `/data/sponsors.json` file by the 'logoKey' property.
This is because of a limitation of the bundler, and cannot be fixed right now.
