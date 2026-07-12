/*
======================================

BD Studio
Workspace Controller

Version 1.2.5

======================================
*/

import { renderExplorer, initializeExplorer } from "./explorer.js";
import { renderInspector } from "./inspector.js";
import { showWelcome } from "./viewer.js";

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