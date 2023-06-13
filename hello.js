import Ajv from "ajv";

const ajv = new Ajv({allErrors: true});  // draft-07


//
// from: https://ajv.js.org/guide/getting-started.html
//

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

const data = {
    foo: 1,
    bar: "abc"
};

// validate ok data
let valid = validate(data);
console.log('data 1: valid, errors:', valid, validate.errors);  // https://ajv.js.org/api.html#error-objects

// validate bad data: additional property
data.baz = null;
valid = validate(data);
console.log('data 2: valid, errors:', valid, validate.errors);  // message: 'must NOT have additional properties'

// validate bad data: bad property type
delete data.baz;
data.foo = "not an int!";
valid = validate(data);
console.log('data 3: valid, errors:', valid, validate.errors);  // message: 'must be integer'
