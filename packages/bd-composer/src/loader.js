/*
====================================================

BD Universe

Package : BD Composer
File    : loader.js
Version : 1.1.0

====================================================
*/

export class Loader {

    static async initialize() {

        console.log("Loader Ready");

    }

    static async loadJSON(url) {

        try {

            const response = await fetch(url);

            if (!response.ok) {

                throw new Error(url);

            }

            return await response.json();

        }

        catch(error){

            console.error("Unable to load:", url);

            return {};

        }

    }

}