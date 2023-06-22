import _validateOptions from '../src/validation.js';
import App from '../src/predtimechart.js';

const {test} = QUnit;


//
// _validateOptions() tests
//

QUnit.module('_validateOptions()');

test('options object invalid', assert => {
    const data = {foo: 1, bar: "abc"};

    // additional property
    data.baz = null;
    assert.throws(
        () => {
            _validateOptions(data);
        },
        /invalid options/,
    );

    // bad property type
    delete data.baz;
    data.foo = "not an int!";
    assert.throws(
        () => {
            _validateOptions(data);
        },
        /invalid options/,
    );
});


//
// App tests
//

QUnit.module('App');

test('options object valid via App', assert => {
    const options = {foo: 1, bar: "abc"};  // valid options
    const actualResult = App.initialize(options);
    assert.equal(actualResult, true);
});
