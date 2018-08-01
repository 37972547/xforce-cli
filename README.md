# sanctuary-cli

## 开始

* 安装
```base
npm install -g xforce-cli
```

* 生成开发环境
```base
xforce-cli init
```

* 执行打包
```base
xforce-cli run <name>
```

## 目录结构
```js
    |-- bin
    |---- index.js                  // 入口
    |-- command
    |---- init.js                   // 初始化项目命令
    |---- run.js                    // 执行打包命令
    |-- index
    |---- indexjs                 // 配置文件
    |---- options.js                // 命令参数配置
    |-- lib                         // 资源文件
    |---- react                     // react 多页项目
    |---- react-page                // react 单页项目
    |---- react-components          // react 组件项目
    |---- server                    // node 后台项目
    |---- vue                       // vue 多页项目
    |---- vue-page                  // vue 单页项目
    |-- template                    // 临时文件夹
    |-- utils                       // 公共方法
```
