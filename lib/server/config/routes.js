let cfg = {
    "/testCtrl/test": {
        "handler": "testCtrl.test",
        "requestMethod": "get"
    },
    "/testCtrl/test2": {
        "handler": "testCtrl.test2",
        "requestMethod": "get"
    },

    "/testCtrl2/test": {
        "handler": "testCtrl2.test",
        "requestMethod": "get"
    },
    "/testCtrl2/test2": {
        "handler": "testCtrl2.test2",
        "requestMethod": "get"
    },


    "/ariesCode": {
        "handler": "ariesCodeCtrl.test",
        "requestMethod": "get"
    },

    "/ariesCodeBlock": {
        "handler": "ariesCodeBlockCtrl.getData",
        "requestMethod": "post"
    },
    "/ariesCodeBlock/delete": {
        "handler": "ariesCodeBlockCtrl.deleteData",
        "requestMethod": "post"
    },
    "/ariesCodeBlock/copy": {
        "handler": "ariesCodeBlockCtrl.copyData",
        "requestMethod": "post"
    }
};

module.exports = cfg;