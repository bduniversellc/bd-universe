/*
======================================

BD Studio
Viewer Module

Version 1.3.4

======================================
*/

import { renderTabs } from "./tabs.js";

function createViewer(title, content) {

    return `

        <div class="tabs">

            ${renderTabs()}

        </div>

        <div class="viewer">

            <h2>${title}</h2>

            <hr>

            <pre>

${content}

            </pre>

        </div>

    `;

}

export function renderViewer(title, content) {

    return createViewer(title, content);

}

export function showWelcome() {

    return createViewer(

        "Welcome",

`Welcome to BD Studio

The development workspace for BD Universe.

Select a file from the Explorer.

Version 1.3.4`

    );

}

export function showFile(file) {

    return createViewer(

        file.name,

`Name : ${file.name}

Path : ${file.path}

Type : ${file.type}

Preview support coming soon...`

    );

}