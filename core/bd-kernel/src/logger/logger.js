/*
========================================

BD Kernel

Logger

========================================
*/

export class Logger {

    constructor() {

        this.history = [];

    }

    log(level, message) {

        const entry = {

            timestamp: new Date().toISOString(),

            level,

            message

        };

        this.history.push(entry);

        console[level]?.(message) ?? console.log(message);

    }

    info(message) {

        this.log("info", message);

    }

    warn(message) {

        this.log("warn", message);

    }

    error(message) {

        this.log("error", message);

    }

    getHistory() {

        return [...this.history];

    }

    clear() {

        this.history = [];

    }

}