/*
====================================================

BD Universe

BD Composer

Core Engine

Version: 1.0.0

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

        Router.initialize();

        Registry.initialize();

        Renderer.initialize();

        console.log("----------------------------------------");
        console.log("Composer Ready");
        console.log("----------------------------------------");

    }

}