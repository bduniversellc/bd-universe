/*
====================================================

BD Universe

Package : BD Composer
File    : loader.js
Version : 1.0.0
Status  : Development

====================================================
*/

export class Loader {

    static configuration = {};

    static async initialize() {

        console.log("Loader initialized.");

    }

    static setConfiguration(configuration) {

        this.configuration = configuration;

    }

    static getConfiguration() {

        return this.configuration;

    }

}