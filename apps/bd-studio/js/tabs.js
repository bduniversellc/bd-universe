/*
======================================

BD Studio
Tabs Module

Version 1.3.3

======================================
*/

import { State } from "./state.js";

let tabs = [];

export function openTab(file) {

    if (!tabs.find(tab => tab.path === file.path)) {

        tabs.push(file);

    }

    State.selectFile(file);

}

export function getTabs() {

    return tabs;

}

export function closeTab(path) {

    tabs = tabs.filter(

        tab => tab.path !== path

    );

}

export function renderTabs() {

    return tabs.map(tab => `

        <div class="tab">

            ${tab.name}

        </div>

    `).join("");

}