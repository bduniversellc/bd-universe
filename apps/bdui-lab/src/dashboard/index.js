/*
====================================================

BD Studio Dashboard

Version 1.0.0

====================================================
*/

import { Repository } from "../repository/index.js";

class Dashboard {

    constructor() {

        this.repository = new Repository();

    }

    async initialize() {

        await this.repository.initialize();

        const data = this.repository.getCatalog();

        this.updateStatistics(data);

    }

    updateStatistics(data) {

        document.getElementById("applications-count").textContent =
            data.applications.length;

        document.getElementById("packages-count").textContent =
            data.packages.length;

        document.getElementById("components-count").textContent =
            data.components.length;

        document.getElementById("blueprints-count").textContent =
            data.blueprints.length;

    }

}

const dashboard = new Dashboard();

document.addEventListener("DOMContentLoaded", () => {

    dashboard.initialize();

});