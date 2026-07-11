/*
======================================

BD Studio
Kernel

Version 0.9.0

======================================
*/

import { APP } from "./config.js";

export const Kernel = {

    app: APP,

    state: {

        initialized: false,

        currentView: "dashboard"

    },

    initialize() {

        console.log("======================================");
        console.log(APP.name);
        console.log("Kernel Started");
        console.log("Version:", APP.version);
        console.log("======================================");

        this.state.initialized = true;

    },

    getCurrentView() {

        return this.state.currentView;

    },

    setCurrentView(view) {

        this.state.currentView = view;

    }

};