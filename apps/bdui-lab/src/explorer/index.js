/*
========================================================

BD Studio Workspace

Version: 1.0.0

Owner: BD Universe LLC

========================================================
*/

class Workspace {

    constructor() {

        this.version = "1.0.0";

        this.name = "BD Studio Workspace";

    }

    initialize() {

        console.log("=================================");
        console.log(this.name);
        console.log("Version:", this.version);
        console.log("Workspace initialized.");
        console.log("=================================");

        this.bindEvents();

    }

    bindEvents() {

        console.log("Workspace ready.");

    }

}

const workspace = new Workspace();

document.addEventListener("DOMContentLoaded", () => {

    workspace.initialize();

});