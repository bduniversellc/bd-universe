/*
======================================

BD Studio
Explorer Module

Version 1.3.1

======================================
*/

import {

    getRepository,
    getFolder,
    getFiles

} from "./repository.js";

import {

    updateInspector

} from "./inspector.js";

import {

    State

} from "./state.js";

export function renderExplorer() {

    const repository = getRepository();

    let html = `<h2>Explorer</h2>`;

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

                <div class="child-folder">

                    📁 ${child}

                </div>

            `;

        });

        const files = getFiles(folder.name);

        if (files) {

            files.files.forEach(file => {

                html += `

                    <div
                        class="file-name"
                        data-folder="${folder.name}"
                        data-file="${file}">

                        📄 ${file}

                    </div>

                `;

            });

        }

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

                const folder =
                    getFolder(item.dataset.folder);

                State.selectFolder(folder);

                State.selectFile(null);

                updateInspector(folder);

            });

        });

    document
        .querySelectorAll(".file-name")
        .forEach(item => {

            item.addEventListener("click", () => {

                const file = {

                    name: item.dataset.file,

                    type: "File",

                    path:
                        "/" +
                        item.dataset.folder +
                        "/" +
                        item.dataset.file,

                    children: []

                };

                State.selectFile(file);

                updateInspector(file);

            });

        });

}