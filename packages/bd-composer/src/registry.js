/*
====================================================

BD Universe

Package : BD Composer
File    : registry.js
Version : 2.0.0
Status  : Development

====================================================
*/

export class Registry {

    static components = new Map();

    static initialize() {

        console.log("Registry initialized.");

    }

    static register(id, component) {

        if (this.components.has(id)) {

            console.warn(`Component "${id}" already exists.`);

            return;

        }

        this.components.set(id, component);

        console.log(`Registered: ${id}`);

    }

    static get(id) {

        return this.components.get(id);

    }

    static has(id) {

        return this.components.has(id);

    }

    static remove(id) {

        this.components.delete(id);

    }

    static clear() {

        this.components.clear();

    }

    static count() {

        return this.components.size;

    }

    static list() {

        return Array.from(this.components.keys());

    }

}