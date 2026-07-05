/*
====================================================

BD Universe

Package : BD Composer
File    : router.js
Version : 1.1.0

====================================================
*/

export class Router {

    static route = "/";

    static initialize(){

        this.route = window.location.pathname;

        console.log("Current Route:", this.route);

    }

    static current(){

        return this.route;

    }

}