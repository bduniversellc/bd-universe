/*
======================================

BD Studio
Viewer Module

Version 1.2.4

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

export function showWelcome() {

    return renderViewer(

        "Welcome",

`Welcome to BD Studio

The development workspace for BD Universe.

Select a file from the Explorer to view its contents.

Version: 1.2.4`

    );

}

export function showFile(file) {

    return renderViewer(

        file.name,

`File: ${file.name}

Path: ${file.path}

Type: ${file.type}

Preview support coming soon...`

    );

}