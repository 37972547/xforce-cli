const util = require('./util');
const config = {
    // 问答-配置开发环境
    messageCommandQuestion: [
        {
            type: 'list',
            name: 'solutionName',
            message: '请选择',
            default: 'fore',
            choices: [{
                key: 'f',
                name: '前端应用开发',
                value: 'fore'
            }, {
                key: 'b',
                name: '后端应用开发',
                value: 'back'
            }]
        },
        {
            type: 'list',
            name: 'frameName',
            message: '请选择',
            default: 'React',
            choices: [
                {
                    key: 'r',
                    name: 'React框架',
                    value: 'React'
                }, {
                    key: 'v',
                    name: 'Vue框架',
                    value: 'Vue'
                }],
            when: function (answers) {
                return util.isFore(answers)
            }
        },
        {
            type: 'list',
            name: 'page',
            message: '请选择',
            default: 'Sing',
            choices: [
                {
                    key: 'r',
                    name: '单页应用',
                    value: 'SingPage'
                }, {
                    key: 'v',
                    name: '多页应用',
                    value: 'MultiPage'
                }],
            when: function (answers) {
                return util.isFore(answers) && !util.isReact(answers)
            }
        },
        {
            type: 'list',
            name: 'page',
            message: '请选择',
            default: 'Sing',
            choices: [
                {
                    key: 'r',
                    name: '单页应用',
                    value: 'SingPage'
                }, {
                    key: 'v',
                    name: '多页应用',
                    value: 'MultiPage'
                },{
                    key: 'c',
                    name: '组件开发',
                    value: 'Component'
                }],
            when: function (answers) {
                return util.isFore(answers) && util.isReact(answers)
            }
        },
        {
            type: 'Input',
            name: 'confirm',
            message: '你确认创建项目吗(Y/n)',
            validate: function (val) {
                if (!/y|n/i.test(val)) { // 校验位数
                    return '请输入y或n';
                }
                return true;
            }
        }
    ],
    packagePath: {
        'back': {
            name: '后端应用',
            path: './lib/server'
        },
        'foreReactSingPage': {
            name: '前端React单页项目应用',
            path: './lib/react-page'
        },
        'foreReactMultiPage': {
            name: '前端React多页项目应用',
            path: './lib/react'
        },
        'foreReactComponent': {
            name: '前端React组件开发',
            path: './lib/react'
        },
        'foreVueSingPage': {
            name: '前端Vue单页项目应用',
            path:'./lib/vue-page'
        },
        'foreVueMultiPage': {
            name: '前端Vue多页项目应用',
            path: './lib/vue'
        },
    }
};

exports.config = config;