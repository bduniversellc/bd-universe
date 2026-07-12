/*
======================================

BD Studio
Explorer Module

Version 1.2.2

======================================
*/

import {

    getRepository

} from "./repository.js";

import {

    updateInspector

} from "./inspector.js";

export function renderExplorer() {

    const repository = getRepository();

    let html = `

        <h2>Explorer</h2>

    `;

    repository.forEach(folder => {

        html += `

            <details open>

                <summary
                    class="folder-name"
                    data-folder="${folder.name}">

                    📂 ${folder.name}

                </summary>

        `;

        folder.children.forEach(child => {

            html += `

                <div
                    class="child-item">

                    📁 ${child}

                </div>

            `;

        });

        html += `

            </details>

        `;

    });

    return html;

}

export function initializeExplorer() {

    document
        .querySelectorAll(".folder-name")
        .forEach(item => {

            item.addEventListener("click", () => {

                const name =
                    item.dataset.folder;

                const folder =
                    getRepository().find(

                        f => f.name === name

                    );

                updateInspector(folder);

            });

        });

}