/*
====================================================

BD Universe

Package : BD Composer
File    : registry.js
Version : 1.0.0
Status  : Development

====================================================
*/

export class Registry {

    static components = new Map();

    static initialize() {

        console.log("Registry initialized.");

    }

    static register(id, component) {

        this.components.set(id, component);

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

}