/*
======================================

BD Studio
Application

Version 0.8.2

======================================
*/

import { APP } from "./js/config.js";

console.clear();

console.log(APP.name + " " + APP.version);

/*
======================================

Views

======================================
*/

const views = {

    dashboard: `
        <h1>Dashboard</h1>
        <p>Welcome to ${APP.name}</p>
        <p>Version ${APP.version}</p>
    `,

    explorer: `
        <h1>Repository Explorer</h1>
        <p>Repository module coming in v0.8.3</p>
    `,

    packages: `
        <h1>Packages</h1>
    `,

    components: `
        <h1>Components</h1>
    `,

    blueprints: `
        <h1>Blueprints</h1>
    `,

    documentation: `
        <h1>Documentation</h1>
    `,

    settings: `
        <h1>Settings</h1>
    `

};

/*
======================================

Elements

======================================
*/

const content = document.getElementById("content");
const status = document.getElementById("kernel-status");
const version = document.getElementById("app-version");

/*
======================================

Startup

======================================
*/

document.title = APP.name;

version.textContent = "v" + APP.version;

status.textContent = APP.kernelStatus;

/*
======================================

Navigation

======================================
*/

const buttons = document.querySelectorAll(".sidebar button");

const pages = [

    "dashboard",
    "explorer",
    "packages",
    "components",
    "blueprints",
    "documentation",
    "settings"

];

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));

        button.classList.add("active");

        content.innerHTML = views[pages[index]];

    });

});

buttons[0].classList.add("active");

content.innerHTML = views.dashboard;