/*
====================================================

BD Universe

Package : BD Composer
File    : router.js
Version : 1.0.0
Status  : Development

====================================================
*/

export class Router {

    static currentRoute = "/";

    static initialize() {

        this.currentRoute = window.location.pathname || "/";

        console.log("Current Route:", this.currentRoute);

    }

    static getCurrentRoute() {

        return this.currentRoute;

    }

}