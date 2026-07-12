/*
======================================

BD Studio
Application Bootstrap

Version 1.2.6

======================================
*/

import { APP } from "./js/config.js";
import { Kernel } from "./js/kernel.js";

import { initializeNavigation } from "./js/navigation.js";
import { initializeWorkspace } from "./js/workspace.js";

import { renderDashboard } from "./js/dashboard.js";
import { renderExplorer } from "./js/explorer.js";

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

Application

======================================
*/

document.title = APP.name;

document.getElementById("app-version").textContent =
    "v" + APP.version;

document.getElementById("kernel-status").textContent =
    APP.kernelStatus;

/*
======================================

Workspace

======================================
*/

initializeWorkspace();

/*
======================================

Navigation

======================================
*/

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

initializeNavigation(

    buttons,

    pages,

    view => {

        Kernel.setCurrentView(view);

    }

);

/*
======================================

Start

======================================
*/

buttons[0].classList.add("active");