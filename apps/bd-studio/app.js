/*
======================================

BD Studio
Application

Version 0.8.5

======================================
*/

import { APP } from "./js/config.js";
import { views } from "./js/views.js";
import { initializeNavigation } from "./js/navigation.js";

console.clear();

console.log(`${APP.name} ${APP.version}`);

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

function show(view){

    content.innerHTML = views[view];

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