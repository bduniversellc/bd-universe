/*
======================================

BD Studio
Application

Version 1.2.4

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

import {
    showWelcome
} from "./js/viewer.js";

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

const explorerPanel =
    document.getElementById("explorer-panel");

const viewerPanel =
    document.getElementById("content");

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

viewerPanel.innerHTML =
    showWelcome();

inspectorPanel.innerHTML =
    renderInspector();

initializeExplorer();

/*
======================================

Renderer

======================================
*/

function show(view){

    Kernel.setCurrentView(view);

    switch(view){

        case "dashboard":

            viewerPanel.innerHTML =
                renderDashboard();

            break;

        default:

            viewerPanel.innerHTML =
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