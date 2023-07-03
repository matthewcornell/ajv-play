import _validateOptions from './validation.js';

const App = {

    initialize(componentDiv, options) {
        console.debug('initialize(): validating options', componentDiv, options)
        _validateOptions(options);

        const componentDivEle = document.getElementById(componentDiv);
        if (componentDivEle === null) {
            throw `componentDiv DOM node not found: '${componentDiv}'`;
        }

        // drive getting jquery to work in node environment:
        const $componentDiv = $(componentDivEle);
        $componentDiv.html(`hello from <span class='forecastViz_select_data'>initialize()!</span> <b>foo</b>=${options.foo}, <b>bar</b>=${options.bar}`);

        // drive getting Plotly to work in node environment:
        Plotly.newPlot(componentDivEle, [{x: [1, 2, 3, 4, 5], y: [1, 2, 4, 8, 16]}], {margin: {t: 0}});

        console.debug('initialize(): done')
        return true;  // arbitrary return value
    },

};

export default App;  // export the module's main entry point
