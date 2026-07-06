/*
========================================

BD Repository Scanner

========================================
*/

export class RepositoryScanner {

    constructor() {

        this.contracts = [];

    }

    register(contract) {

        this.contracts.push(contract);

    }

    generateManifest() {

        return {

            generated: new Date().toISOString(),

            total: this.contracts.length,

            contracts: this.contracts

        };

    }

}