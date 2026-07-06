/*
========================================

BD Kernel
Service Registry

========================================
*/

export class ServiceRegistry {

    constructor() {
        this.services = new Map();
    }

    register(name, service) {

        if (this.services.has(name)) {
            throw new Error(`Service "${name}" is already registered.`);
        }

        this.services.set(name, service);
    }

    get(name) {

        if (!this.services.has(name)) {
            throw new Error(`Service "${name}" was not found.`);
        }

        return this.services.get(name);
    }

    has(name) {
        return this.services.has(name);
    }

    list() {
        return Array.from(this.services.keys());
    }

}