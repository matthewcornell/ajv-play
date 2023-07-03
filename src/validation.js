import validate from './schema-validator.cjs';  // Ajs standalone validation code


//
// _validateOptions()
//

/**
 * Validates an initialize() options object.
 *
 * @param {Object} options - visualization initialization options as documented at https://docs.zoltardata.com/visualizationoptionspage/
 * @throws {Error} - if invalid
 * @private
 */
function _validateOptions(options) {
    // validate structure based on schema using Ajv-compiled validation function
    const valid = validate(options);
    if (!valid) {
        if (validate.errors !== null) {
            console.error(`_validateOptions(): invalid schema. ${validate.errors.length} error(s). options:, errors:`,
                options, validate.errors);
        }
        throw `invalid options`;
    }

    // non-schema (i.e., semantic) validations would go here
}


//
// done
//

export default _validateOptions;
