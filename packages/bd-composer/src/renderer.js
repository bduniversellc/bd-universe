/*
====================================================

BD Universe

Package : BD Composer
File    : renderer.js
Version : 1.0.0
Status  : Development

====================================================
*/

export class Renderer {

    static initialize() {

        console.log("Renderer initialized.");

    }

    static render(componentId, target) {

        console.log(`Render request: ${componentId}`);

        console.log(`Target: ${target}`);

    }

}