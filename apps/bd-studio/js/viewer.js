/*
======================================

BD Studio
Viewer Module

Version 1.1.0

======================================
*/

export function renderViewer(title, content) {

    return `

        <div class="viewer">

            <h2>${title}</h2>

            <hr>

            <pre>

${content}

            </pre>

        </div>

    `;

}