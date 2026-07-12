/*
======================================

BD Studio
Application

Version 1.2.2

======================================
*/

import { APP } from "./js/config.js";
import { views } from "./js/views.js";

import { Kernel } from "./js/kernel.js";

import { initializeNavigation } from "./js/navigation.js";

import { renderDashboard } from "./js/dashboard.js";

import {
    renderExplorer,
    initializeExplorer
} from "./js/explorer.js";

import {
    renderInspector
} from "./js/inspector.js";

/*
======================================

Kernel

======================================
*/

console.clear();

Kernel.initialize();

Kernel.register("dashboard", renderDashboard);

Kernel.register("explorer", renderExplorer);

Kernel.register("navigation", initializeNavigation);

/*
======================================

Elements

======================================
*/

const content =
    document.getElementById("content");

const explorerPanel =
    document.getElementById("explorer-panel");

const inspectorPanel =
    document.getElementById("inspector");

const status =
    document.getElementById("kernel-status");

const version =
    document.getElementById("app-version");

const buttons =
    document.querySelectorAll(".sidebar button");

const pages = [

    "dashboard",

    "explorer",

    "packages",

    "components",

    "blueprints",

    "documentation",

    "settings"

];

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

Panels

======================================
*/

explorerPanel.innerHTML =
    renderExplorer();

initializeExplorer();

inspectorPanel.innerHTML =
    renderInspector();

/*
======================================

Renderer

======================================
*/

function show(view){

    Kernel.setCurrentView(view);

    switch(view){

        case "dashboard":

            content.innerHTML =
                renderDashboard();

            break;

        default:

            content.innerHTML =
                views[view];

    }

}

/*
======================================

Navigation

======================================
*/

initializeNavigation(

    buttons,

    pages,

    show

);

/*
======================================

Start

======================================
*/

buttons[0].classList.add("active");

show("dashboard");