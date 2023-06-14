import Ajv from "ajv";


//
// Ajv setup
//

const ajv = new Ajv({allErrors: true});  // draft-07

// pretend schema. from: https://ajv.js.org/guide/getting-started.html
const schema = {
    type: "object",
    properties: {
        foo: {type: "integer"},
        bar: {type: "string"}
    },
    required: ["foo"],
    additionalProperties: false
};

const validate = ajv.compile(schema);


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
    // options object: must be present
    if ((options === null) || (typeof options !== "object")) {
        throw `options object is required but missing: '${options}'`;
    }

    // validate against schema
    const valid = validate(options);
    if (!valid) {  // validate.errors
        throw `invalid options`;
    }
}


//
// done
//

export default _validateOptions;
