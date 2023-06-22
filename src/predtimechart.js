import _validateOptions from './validation.js';
import './predtimechart.css';

const App = {

    initialize(options) {
        console.debug('initialize(): validating options', options)
        _validateOptions(options);

        // would do other stuff here...
        if (typeof document !== 'undefined') {
            const divElement = document.createElement('div');
            divElement.innerHTML = "hello from <span class='forecastViz_select_data'>initialize()!</span>";
            document.body.appendChild(divElement);
        }

        console.debug('initialize(): done')
        return true;  // arbitrary return value
    },

};

export default App;  // export the module's main entry point
