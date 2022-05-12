const path = require('path');
const jsConfig = require('./jsconfig.json');

module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        [
            'module-resolver',
            {
                root: [path.resolve(jsConfig.compilerOptions.baseUrl)],
            },
        ],
        // "transform-runtime", {
        //     "regenerator": true
        //   }
        ["@babel/transform-runtime"]
    ]
}