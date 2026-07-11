/*
======================================

BD Studio
Explorer Module

Version 0.8.7

======================================
*/

import { repository } from "./repository.js";

export function renderExplorer() {

    let html = `
        <h1>Repository Explorer</h1>

        <div id="repository-tree">
    `;

    repository.forEach(folder => {

        html += `
            <details>

                <summary>📂 ${folder.name}</summary>
        `;

        folder.children.forEach(child => {

            html += `
                <div style="margin-left:24px;padding:4px 0;">

                    📁 ${child}

                </div>
            `;

        });

        html += `</details>`;

    });

    html += `</div>`;

    return html;

}