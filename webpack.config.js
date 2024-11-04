const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname, // Output directly to the root directory
    },
    mode: 'development'
};
