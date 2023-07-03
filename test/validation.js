import {JSDOM} from "jsdom";
import jQueryFactory from 'jquery'; // per https://bugs.jquery.com/ticket/14549
import _validateOptions from '../src/validation.js';
import App from '../src/predtimechart.js';

const {test} = QUnit;


//
// create `document` (with a 'qunit-fixture' DIV in it), `$`, and `Plotly` globals
//

const html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Title</title></head><body><div id="qunit-fixture"></div></body></html>';
const jsdomWindow = new JSDOM(html).window;
global.document = jsdomWindow.document;
global.$ = jQueryFactory(jsdomWindow);


const PlotlyStub = {
    numCalls: 0,  // mock-style counter for below functions
    newPlot(...args) {
        this.numCalls++;
        console.log('newPlot()', args)
    },
    react() {
        this.numCalls++;
        console.log('react()')
    },
    relayout() {
        this.numCalls++;
        console.log('relayout()')
    },
}
global.Plotly = PlotlyStub;


//
// _validateOptions() tests
//

QUnit.module('_validateOptions()');

test('options object invalid', assert => {
    const data = {foo: 1, bar: "2022-02-22"};  // valid

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

    // both problems (drives possibly reporting multiple errors)
    data.baz = null;           // additional property
    data.foo = "not an int!";  // bad property type
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
    const options = {foo: 1, bar: "2022-02-22"};  // valid options
    const actualResult = App.initialize('qunit-fixture', options);
    assert.equal(actualResult, true);
});


//
// options DIV tests
//

QUnit.module('options DIV');

test('initialize() updates DOM', assert => {
    const options = {foo: 1, bar: "2022-02-22"};  // valid options
    App.initialize('qunit-fixture', options);

    // test that Plotly function(s) were called
    assert.true(PlotlyStub.numCalls > 0);
});
