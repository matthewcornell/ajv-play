# intro

This is a small node.js prototype project that defines a simple component (`App.initialize()` in `predtimechart.js`) that uses an [https://ajv.js.org/](Ajv)-based validation module, for ultimate use in https://github.com/reichlab/predtimechart/ .

Goals:

- get https://ajv.js.org/ working in a stand-alone node.js project
- get a Qunit test of a simple user module working ""
- package/bundle this project into a dependency-free single file or dir for use in a matching small client project - see `ajv-play-client`

Files:

- **predtimechart.js**: the component. exports `App` with its `App.initialize()` entry point. imports `_validateOptions()` from `validation.js`. meant to be used by a client _html_ file
- **hello.js**: simple app that imports `App` from `predtimechart.js`. gives us something to run in this project
- **validation.js**: exports `_validateOptions()`, which uses Ajv to validate its input
- **test/validation.js**: defines some [Qunit](https://qunitjs.com/) tests against `validation.js`

# running hello.js

```bash
/usr/local/bin/node /Users/cornell/IdeaProjects/ajv-play/hello.js
```

# running tests

```bash
/usr/local/bin/npm test
```

# packaging

todo xx
