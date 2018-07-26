const os = require('os');

const system = function () {
    const system = os.platform();
    const options = {
        windows: false
    };

    switch (system) {
        case 'win32':
            options.windows = true;
        default:

    }

    return options
};

exports.system = system;