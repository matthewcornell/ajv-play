import App from '../src/predtimechart.js';

const {test} = QUnit;


//
// _validateOptions() tests
//

QUnit.module('_validateOptions()');

test('options object missing', assert => {
    assert.throws(
        function () {
            App.initialize();
        },
        /options object is required but missing/,
    );
});

test('options object invalid', assert => {
    const data = {foo: 1, bar: "abc"};

    // additional property
    data.baz = null;
    assert.throws(
        () => {
            App.initialize(data);
        },
        /invalid options/,
    );

    // bad property type
    delete data.baz;
    data.foo = "not an int!";
    assert.throws(
        () => {
            App.initialize(data);
        },
        /invalid options/,
    );
});

test('options object valid', assert => {
    const options = {foo: 1, bar: "abc"};  // valid options
    const actualResult = App.initialize(options);
    assert.equal(actualResult, true);
});
