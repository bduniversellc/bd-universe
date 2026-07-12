/*
======================================

BD Studio
Workspace Controller

Version 1.3.7 STABLE

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
    showWelcome,
    showFile
} from "./viewer.js";

export function initializeWorkspace() {

    document.getElementById("explorer-panel").innerHTML =
        renderExplorer();

    document.getElementById("content").innerHTML =
        showWelcome();

    document.getElementById("inspector").innerHTML =
        renderInspector();

    initializeExplorer();

}

export function showDashboard(renderDashboard) {

    document.getElementById("content").innerHTML =
        renderDashboard();

}

export function showView(html) {

    document.getElementById("content").innerHTML =
        html;

}

export function showInspector(html) {

    document.getElementById("inspector").innerHTML =
        html;

}

export function showSelectedFile(file) {

    document.getElementById("content").innerHTML =
        showFile(file);

}