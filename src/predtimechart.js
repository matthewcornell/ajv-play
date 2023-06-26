import _validateOptions from './validation.js';

const App = {

    initialize(options) {
        console.debug('initialize(): validating options', options)
        _validateOptions(options);

        // would do other stuff here...
        if (typeof document !== 'undefined') {  // is undefined when running tests
            const divElement = document.createElement('div');
            divElement.innerHTML = "hello from <span class='forecastViz_select_data'>initialize()!</span>";
            document.body.appendChild(divElement);
        }

        console.debug('initialize(): done')
        return true;  // arbitrary return value
    },

};

export default App;  // export the module's main entry point
