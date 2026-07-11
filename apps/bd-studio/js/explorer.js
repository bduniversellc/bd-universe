/*
======================================

BD Studio
Explorer Module

Version 1.0.1

======================================
*/

import { repository } from "./repository.js";

export function renderExplorer() {

    let html = `

        <div class="explorer">

            <h2>Repository</h2>

    `;

    repository.forEach(folder => {

        html += `

            <details open>

                <summary>

                    📂 ${folder.name}

                </summary>

        `;

        folder.children.forEach(child => {

            html += `

                <div
                    style="margin-left:20px;padding:6px 0;cursor:pointer;"
                    onclick="selectItem('${folder.name}','${child}')">

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

            <p>Select a folder from the Explorer.</p>

        </div>

    `;

    return html;

}

window.selectItem = function(folder, item){

    const inspector = document.getElementById("inspector");

    inspector.innerHTML = `

        <h2>Inspector</h2>

        <p><strong>Folder:</strong> ${folder}</p>

        <p><strong>Name:</strong> ${item}</p>

        <p><strong>Type:</strong> Project Folder</p>

        <p><strong>Status:</strong> Ready</p>

    `;

};