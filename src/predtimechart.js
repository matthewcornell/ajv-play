import _validateOptions from './validation.js';

const App = {

    initialize(options) {
        console.debug('initialize(): validating options')
        _validateOptions(options);

        // would do other stuff here...

        console.debug('initialize(): done')
        return true;  // arbitrary return value
    },

};

export default App;  // export the module's main entry point
