## Quick Start

* 安装

```bash
npm install
```
or
```bash
yarn install
```

* 运行

```
npm run dev
```

## 目录结构

`src` 目录下

```js
|-- assets                      // 静态资源
|-- common                      // 常量
|---- menus.js                  // 菜单入口
|-- components                  // 公用组件
|-- index                      // 暂未用到
|-- pages                       // 功能模块
|---- index.jsx                 // 页面布局逻辑处理入口
|---- Layout                    // 页面布局模块
|---- Login                     // 登陆模块
|------ module                  // 当前模块 redux
|------ components              // 当前模块公用组件
|------ index.jsx               // 当前模块入口
|------ index.scss              // 当前模块样式
|---- ...                       // 其他模块
|-- routes                      // route 配置
|---- index.jsx                 // route 入口文件
|-- store                       // redux 配置
|---- reducers.js               // redux 入口文件
|-- utils                       // 封装公用方法
|-- index.jsx                   // 项目入口
```

> **注意** `pages` 目录下文件夹对应的是功能模块

## 新增模块

* 比如新增**列表管理模块**：

在 `src/pages` 目录下新建文件夹，且命名未 `List`

```js
|-- List
|---- module // 当前模块 redux
|---- components // 当前模块公用组件
|---- index.jsx // 当前模块入口
|---- index.scss // 当前模块样式
```

* 添加路由

打开 `src/routes/index.js` 文件，添加对应模块的路由即可

打开 `src/common/menus.js` 文件，添加对应模块的菜单入口

打开 `src/store/reducers.js` 文件，添加对应模块的 `redux`

