/*
====================================================

BD Universe

Package : BD Composer
File    : composer.js
Version : 1.0.0
Status  : Development

====================================================
*/

import { Loader } from "./loader.js";
import { Registry } from "./registry.js";
import { Router } from "./router.js";
import { Renderer } from "./renderer.js";

export class Composer {

    static async start() {

        console.clear();

        console.log("========================================");
        console.log("BD Composer");
        console.log("Version 1.0.0");
        console.log("========================================");

        await Loader.initialize();

        Registry.initialize();

        Router.initialize();

        Renderer.initialize();

        console.log("----------------------------------------");
        console.log("Composer Ready");
        console.log("----------------------------------------");

    }

}