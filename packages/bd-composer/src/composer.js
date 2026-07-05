/*
====================================================

BD Universe

Package : BD Composer
File    : composer.js
Version : 1.1.0

====================================================
*/

import { Loader } from "./loader.js";
import { Registry } from "./registry.js";
import { Router } from "./router.js";
import { Renderer } from "./renderer.js";

export class Composer {

    static state = {};

    static async start() {

        console.clear();

        console.log("================================");
        console.log("BD Composer");
        console.log("Version 1.1.0");
        console.log("================================");

        await Loader.initialize();

        this.state.site =
            await Loader.loadJSON("/src/data/site.json");

        this.state.navigation =
            await Loader.loadJSON("/src/data/navigation.json");

        Registry.initialize();

        Router.initialize();

        Renderer.initialize();

        console.log(this.state);

        console.log("Composer Ready");

    }

}