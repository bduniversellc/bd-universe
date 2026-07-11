/*
======================================

BD Studio
Explorer Module

Version 1.0.2

======================================
*/

import {

    getRepository,
    getFolder

} from "./repository.js";

export function renderExplorer() {

    const repository = getRepository();

    let html = `

        <div class="explorer">

            <h2>Repository</h2>

    `;

    repository.forEach(folder => {

        html += `

            <details open>

                <summary
                    onclick="selectFolder('${folder.name}')">

                    📂 ${folder.name}

                </summary>

        `;

        folder.children.forEach(child => {

            html += `

                <div
                    style="
                        margin-left:20px;
                        padding:6px 0;
                    ">

                    📁 ${child}

                </div>

            `;

        });

        html += `

            </details>

        `;

    });

    html += `

        </div>

        <div
            class="inspector"
            id="inspector">

            <h2>Inspector</h2>

            <p>Select a folder.</p>

        </div>

    `;

    return html;

}

window.selectFolder = function(name){

    const folder = getFolder(name);

    const inspector =
        document.getElementById("inspector");

    inspector.innerHTML = `

        <h2>Inspector</h2>

        <p><strong>Name:</strong> ${folder.name}</p>

        <p><strong>Type:</strong> ${folder.type}</p>

        <p><strong>Path:</strong> ${folder.path}</p>

        <p><strong>Children:</strong> ${folder.children.length}</p>

    `;

};