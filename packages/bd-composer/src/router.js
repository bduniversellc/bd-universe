/*
====================================================

BD Universe

BD Composer

Router

Version: 1.0.0

====================================================
*/

export const Router = {

    currentRoute: "/",

    routes: {},

    initialize(routes = {}) {

        this.routes = routes;

        this.currentRoute = window.location.pathname || "/";

        console.log("Router initialized");

        console.log("Current Route:", this.currentRoute);

    },

    getCurrentRoute() {

        return this.currentRoute;

    },

    hasRoute(route) {

        return Object.prototype.hasOwnProperty.call(this.routes, route);

    },

    getRoute(route) {

        return this.routes[route] || null;

    },

    navigate(route) {

        if (!this.hasRoute(route)) {

            console.warn(`Route "${route}" not found.`);

            return;

        }

        window.history.pushState({}, "", route);

        this.currentRoute = route;

        console.log(`Navigated to ${route}`);

    }

};