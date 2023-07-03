import validate from './schema-validator.js';  // Ajs standalone validation code


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
    // validate against schema
    const valid = validate(options);
    if (!valid) {
        if (validate.errors !== null) {
            console.error(`_validateOptions(): invalid schema. ${validate.errors.length} error(s). options:, errors:`,
                options, validate.errors);
        }
        throw `invalid options`;
    }
}


//
// done
//

export default _validateOptions;
