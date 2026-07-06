/*
========================================

BD Kernel
Contract Validator

========================================
*/

export class ContractValidator {

    constructor(schema) {
        this.schema = schema;
    }

    validate(contract) {

        const errors = [];

        this.schema.required.forEach(field => {

            if (!(field in contract)) {

                errors.push(`Missing required field: ${field}`);

            }

        });

        return {
            valid: errors.length === 0,
            errors
        };

    }

}