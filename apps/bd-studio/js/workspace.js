/*
======================================

BD Studio
Workspace Controller

Version 1.3.4

======================================
*/

import {

    renderExplorer,
    initializeExplorer

} from "./explorer.js";

import {

    renderInspector

} from "./inspector.js";

import {

    showWelcome

} from "./viewer.js";

import {

    getTabs

} from "./tabs.js";

export function initializeWorkspace() {

    const explorer =
        document.getElementById("explorer-panel");

    const viewer =
        document.getElementById("content");

    const inspector =
        document.getElementById("inspector");

    explorer.innerHTML =
        renderExplorer();

    viewer.innerHTML =
        showWelcome();

    inspector.innerHTML =
        renderInspector();

    initializeExplorer();

}

export function refreshViewer(view) {

    const viewer =
        document.getElementById("content");

    viewer.innerHTML = view;

}

export function refreshTabs() {

    const tabs =
        document.querySelector(".tabs");

    if(!tabs) return;

    tabs.innerHTML =
        getTabs()

        .map(tab => `

            <div
                class="tab">

                ${tab.name}

            </div>

        `)

        .join("");

}