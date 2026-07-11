/*
======================================

BD Studio
Application

Version 0.8.4

======================================
*/

import { APP } from "./js/config.js";
import { views } from "./js/views.js";

console.clear();

console.log(APP.name + " " + APP.version);

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

        show(pages[index]);

    });

});

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

Start

======================================
*/

buttons[0].classList.add("active");

show("dashboard");