/*
========================================

BD Kernel

Event Bus

========================================
*/

export class EventBus {

    constructor() {

        this.listeners = new Map();

    }

    subscribe(event, callback) {

        if (!this.listeners.has(event)) {

            this.listeners.set(event, []);

        }

        this.listeners.get(event).push(callback);

    }

    publish(event, payload = {}) {

        if (!this.listeners.has(event)) {

            return;

        }

        this.listeners.get(event).forEach(callback => {

            callback(payload);

        });

    }

    unsubscribe(event, callback) {

        if (!this.listeners.has(event)) {

            return;

        }

        const updated = this.listeners
            .get(event)
            .filter(listener => listener !== callback);

        this.listeners.set(event, updated);

    }

}