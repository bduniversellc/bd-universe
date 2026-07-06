/*
====================================================

BD Studio

Repository Service

Version: 1.0.0

====================================================
*/

export class Repository {

    constructor() {

        this.catalog = null;

    }

    async initialize() {

        this.catalog = await this.load();

        console.log("Repository Service Ready");

        console.table(this.catalog);

    }

    async load() {

        const response = await fetch("./repository.json");

        return await response.json();

    }

    getCatalog() {

        return this.catalog;

    }

}

const repository = new Repository();

document.addEventListener("DOMContentLoaded", () => {

    repository.initialize();

});