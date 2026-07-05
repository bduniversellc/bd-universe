/*
====================================================

BD Universe

Application Bootstrap

Version: 1.1.0

====================================================
*/

import { Composer } from "../../../packages/bd-composer/src/composer.js";

async function loadConfiguration() {

    const app = await fetch("./src/config/app.json").then(r => r.json());

    const navigation = await fetch("./src/config/navigation.json").then(r => r.json());

    const routes = await fetch("./src/config/routes.json").then(r => r.json());

    const theme = await fetch("./src/config/theme.json").then(r => r.json());

    return {

        app,

        navigation,

        routes,

        theme

    };

}

document.addEventListener("DOMContentLoaded", async () => {

    const configuration = await loadConfiguration();

    await Composer.start(configuration);

});