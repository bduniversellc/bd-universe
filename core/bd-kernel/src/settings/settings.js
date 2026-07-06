/*
========================================

BD Kernel

Settings Service

========================================
*/

export class Settings {

    constructor() {

        this.defaults = {

            theme: "light",

            language: "en",

            sidebarWidth: 280,

            autoScan: true,

            showWelcome: true

        };

        this.values = { ...this.defaults };

    }

    get(key) {

        return this.values[key];

    }

    set(key, value) {

        this.values[key] = value;

    }

    has(key) {

        return Object.prototype.hasOwnProperty.call(this.values, key);

    }

    reset() {

        this.values = { ...this.defaults };

    }

    getAll() {

        return { ...this.values };

    }

}