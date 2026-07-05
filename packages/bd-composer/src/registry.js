/*
====================================================

BD Universe

Package : BD Composer
File    : registry.js
Version : 1.1.0

====================================================
*/

export class Registry {

    static components = new Map();

    static initialize(){

        console.log("Registry Ready");

    }

    static register(id, component){

        this.components.set(id, component);

    }

    static get(id){

        return this.components.get(id);

    }

    static all(){

        return this.components;

    }

}