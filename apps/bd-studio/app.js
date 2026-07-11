/*
======================================

BD Studio
Application

Version 1.0.2

======================================
*/

import { APP } from "./js/config.js";
import { views } from "./js/views.js";
import { initializeNavigation } from "./js/navigation.js";
import { renderDashboard } from "./js/dashboard.js";
import { renderExplorer } from "./js/explorer.js";
import { Kernel } from "./js/kernel.js";

console.clear();

/*
======================================

Kernel

======================================
*/

Kernel.initialize();

Kernel.register("dashboard", renderDashboard);
Kernel.register("explorer", renderExplorer);
Kernel.register("navigation", initializeNavigation);

/*
======================================

Elements

======================================
*/

const content = document.getElementById("content");
const status = document.getElementById("kernel-status");
const version = document.getElementById("app-version");

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

Renderer

======================================
*/

function show(view) {

    Kernel.setCurrentView(view);

    switch (view) {

        case "dashboard":
            content.innerHTML = Kernel.getModule("dashboard")();
            break;

        case "explorer":
            content.innerHTML = Kernel.getModule("explorer")();
            break;

        default:
            content.innerHTML = views[view];

    }

}

/*
======================================

Navigation

======================================
*/

Kernel.getModule("navigation")(
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

show(Kernel.getCurrentView());