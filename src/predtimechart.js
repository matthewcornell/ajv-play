import _validateOptions from './validation.js';

const App = {

    initialize(options) {
        console.debug('initialize(): validating options')
        _validateOptions(options);

        // would do other stuff here...
        if (typeof document !== 'undefined') {
            const divElement = document.createElement('div');
            divElement.innerHTML = 'hello from initialize()!';
            document.body.appendChild(divElement);
        }

        console.debug('initialize(): done')
        return true;  // arbitrary return value
    },

};

export default App;  // export the module's main entry point
