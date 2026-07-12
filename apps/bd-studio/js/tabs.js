/*
======================================

BD Studio
Tabs Module

Version 1.3.5

======================================
*/

import { State } from "./state.js";

let tabs = [];

export function openTab(file){

    const exists = tabs.find(

        tab => tab.path === file.path

    );

    if(!exists){

        tabs.push(file);

    }

    State.selectFile(file);

}

export function closeTab(path){

    tabs = tabs.filter(

        tab => tab.path !== path

    );

}

export function getTabs(){

    return tabs;

}

export function getActiveTab(){

    return State.getFile();

}

export function renderTabs(){

    const active = getActiveTab();

    return tabs.map(tab => `

        <div

            class="tab ${active && active.path === tab.path ? "active" : ""}"

            data-path="${tab.path}">

            ${tab.name}

        </div>

    `).join("");

}