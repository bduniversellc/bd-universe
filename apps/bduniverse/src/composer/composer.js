/*
====================================================

BD Universe

Composer

Version 1.0.0

====================================================
*/

import { Loader } from "./loader.js";
import { Registry } from "./registry.js";
import { Renderer } from "./renderer.js";

export const Composer = {

    async start() {

        console.log("BD Composer v1.0");

        await Loader.initialize();

        Registry.initialize();

        Renderer.initialize();

        console.log("Composer Ready");

    }

};