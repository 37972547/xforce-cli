# sanctuary-cli

## 开始

* 安装
```base
npm install -g xforce-cli
```

> 生成开发环境
```base
sanctuary-cli init
```

> 配置文件 webpack.config.json
```json
{
  "path": "e:\\xforce-cli\\lib\\react-page",
  "entry": "./src/index.html"
}
```
* path: 当前源位置 不可更改
* entry: 配置打包入口文件

> 执行打包
```base
sanctuary-cli run <name>
```
name 同 package.json scripts
注意：node 后台服务请使用npm run


## 目录结构
```js
    |-- bin
    |---- index.js --------------------- 入口
    |-- command
    |---- init.js ---------------------- 初始化项目命令
    |---- run.js ----------------------- 执行打包命令
    |-- index
    |---- indexjs --------------------- 配置文件
    |---- options.js ------------------- 命令参数配置
    |-- lib ------------------------- 资源文件
    |---- react ------------------------ react 多页项目
    |---- react-page ------------------- react 单页项目
    |---- react-components ------------- react 组件项目
    |---- server ----------------------- 后台项目
    |---- vue -------------------------- vue 多页项目
    |---- vue-page --------------------- vue 单页项目
    |-- template -------------------- 临时文件夹
    |-- utils
    |---- files.js --------------------- 文件操作
    |---- humanComputerInteraction.js -- 问答
    |---- systemCommand.js ------------- 执行系统命令
    |---- util.js ---------------------- 公共方法
```
