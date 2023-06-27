import _validateOptions from './validation.js';

const App = {

    initialize(componentDiv, options) {
        console.debug('initialize(): validating options', componentDiv, options)
        _validateOptions(options);

        const componentDivEle = document.getElementById(componentDiv);
        if (componentDivEle === null) {
            throw `componentDiv DOM node not found: '${componentDiv}'`;
        }

        const $componentDiv = $(componentDivEle);  // drive getting jquery to work in node environment
        $componentDiv.html(`hello from <span class='forecastViz_select_data'>initialize()!</span> <b>foo</b>=${options.foo}, <b>bar</b>=${options.bar}`);
        $('body').append($componentDiv);

        console.debug('initialize(): done')
        return true;  // arbitrary return value
    },

};

export default App;  // export the module's main entry point
