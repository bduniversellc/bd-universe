/*
====================================================

BD Studio

Explorer

====================================================
*/

import { Repository } from "../repository/index.js";

import { ExplorerRenderer } from "./renderer.js";

export class Explorer {

    constructor() {

        this.repository = new Repository();

    }

    async initialize() {

        await this.repository.initialize();

        const data = this.repository.getCatalog();

        const container = document.querySelector(".tree");

        container.innerHTML = "";

        container.innerHTML += ExplorerRenderer.render(
            "Applications",
            data.applications
        );

        container.innerHTML += ExplorerRenderer.render(
            "Packages",
            data.packages
        );

        container.innerHTML += ExplorerRenderer.render(
            "Components",
            data.components
        );

        container.innerHTML += ExplorerRenderer.render(
            "Blueprints",
            data.blueprints
        );

    }

}