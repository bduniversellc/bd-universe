/*
====================================================

BD Universe

Package : BD Composer

File : composer.js

Version : 1.2.0

====================================================
*/

import { Loader } from "./loader.js";
import { Registry } from "./registry.js";
import { Router } from "./router.js";
import { Renderer } from "./renderer.js";

export class Composer {

    static configuration = {};

    static async start(configuration) {

        console.clear();

        console.log("===================================");

        console.log("BD Composer");

        console.log("===================================");

        this.configuration = configuration;

        await Loader.initialize(configuration);

        Registry.initialize();

        Router.initialize(configuration.routes);

        Renderer.initialize();

        console.log(configuration);

        console.log("Composer Ready");

    }

}