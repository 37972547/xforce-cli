const os = require('os');

const env = function () {
    const env = os.platform();
    const options = {
        windows: false
    };

    switch (env) {
        case 'win32':
            options.windows = true;
        default:

    }

    return options
};

exports.env = env;