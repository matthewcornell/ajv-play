import {JSDOM} from "jsdom";

import _validateOptions from '../src/validation.js';
import App from '../src/predtimechart.js';

const {test} = QUnit;


//
// create `document` global and 'qunit-fixture' DIV in it
//

const html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Title</title></head><body><div id="qunit-fixture"></div></body></html>';
global.document = new JSDOM(html).window.document;


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
    const actualResult = App.initialize('qunit-fixture', options);
    assert.equal(actualResult, true);
});


//
// options DIV tests
//

QUnit.module('options DIV');

test('initialize() updates DOM', assert => {
    const options = {foo: 1, bar: "abc"};  // valid options
    App.initialize('qunit-fixture', options);

    // test that content was added to the componentDiv
    const innerHTML = document.getElementById('qunit-fixture').innerHTML;
    assert.true(innerHTML !== '');
});
