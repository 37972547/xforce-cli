let config = [
    {
        id : "testCtrl",
        classPath : "controller/TestCtrl.js",
        props : [
          {
            propertyName : "service",
            id : "testService"
          }
        ],
        aop : {
          methods : [
            {
              methodName : "test",
              beforeAdvise: "aop.tx1"
            },
            {
              methodName : "test2",
              beforeAdvise: "aop.beforeAdvance"
            }
          ]

        }
    },

    {
        id : "ariesCodeCtrl",
        classPath : "controller/AriesCodeCtrl.js",
        props : [
            {
                propertyName : "service",
                id : "ariesCodeService"
            }
        ]
    },

    {
        id : "ariesCodeBlockCtrl",
        classPath : "controller/AriesCodeBlockCtrl.js",
        props : [
            {
                propertyName : "service",
                id : "ariesCodeBlockService"
            }
        ]
    },

    {
        id : "testService",
        classPath : "services/TestService.js"
    },

    {
        id : "aop",
        classPath : "config/aopTest.js"
    },

    {
        id: "ariesCodeService",
        classPath: "services/AriesCodeService.js"
    },
    {
        id: "ariesCodeBlockService",
        classPath: "services/AriesCodeBlockService.js"
    }
];


module.exports = config;