/*
======================================

BD Studio
Kernel

Version 0.9.2

======================================
*/

import { APP } from "./config.js";

export const Kernel = {

    app: APP,

    state: {

        initialized: false,

        currentView: "dashboard"

    },

    modules: {},

    initialize() {

        console.log("======================================");
        console.log(APP.name);
        console.log("Kernel Started");
        console.log("Version:", APP.version);
        console.log("======================================");

        this.state.initialized = true;

    },

    register(name, module) {

        this.modules[name] = module;

        console.log("Module Registered:", name);

    },

    getModule(name) {

        return this.modules[name];

    },

    getCurrentView() {

        return this.state.currentView;

    },

    setCurrentView(view) {

        this.state.currentView = view;

    }

};