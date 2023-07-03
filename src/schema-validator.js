export default validate20;
const schema22 = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "https://github.com/matthewcornell/ajv-play/blob/main/src/schema.json",
    "title": "My schema",
    "description": "A schema from: https://ajv.js.org/guide/getting-started.html",
    "type": "object",
    "properties": {"foo": {"type": "integer"}, "bar": {"type": "string"}},
    "required": ["foo"],
    "additionalProperties": false
};

function validate20(data, {instancePath = "", parentData, parentDataProperty, rootData = data} = {}) {/*# sourceURL="https://github.com/matthewcornell/ajv-play/blob/main/src/schema.json" */
    ;let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.foo === undefined) {
            const err0 = {
                instancePath,
                schemaPath: "#/required",
                keyword: "required",
                params: {missingProperty: "foo"},
                message: "must have required property '" + "foo" + "'"
            };
            if (vErrors === null) {
                vErrors = [err0];
            } else {
                vErrors.push(err0);
            }
            errors++;
        }
        for (const key0 in data) {
            if (!((key0 === "foo") || (key0 === "bar"))) {
                const err1 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: {additionalProperty: key0},
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err1];
                } else {
                    vErrors.push(err1);
                }
                errors++;
            }
        }
        if (data.foo !== undefined) {
            let data0 = data.foo;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                const err2 = {
                    instancePath: instancePath + "/foo",
                    schemaPath: "#/properties/foo/type",
                    keyword: "type",
                    params: {type: "integer"},
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err2];
                } else {
                    vErrors.push(err2);
                }
                errors++;
            }
        }
        if (data.bar !== undefined) {
            if (typeof data.bar !== "string") {
                const err3 = {
                    instancePath: instancePath + "/bar",
                    schemaPath: "#/properties/bar/type",
                    keyword: "type",
                    params: {type: "string"},
                    message: "must be string"
                };
                if (vErrors === null) {
                    vErrors = [err3];
                } else {
                    vErrors.push(err3);
                }
                errors++;
            }
        }
    } else {
        const err4 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {type: "object"},
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err4];
        } else {
            vErrors.push(err4);
        }
        errors++;
    }
    validate20.errors = vErrors;
    return errors === 0;
}