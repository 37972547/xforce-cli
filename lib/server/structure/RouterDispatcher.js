const router = require('koa-router')();

const routerCfg = require("../config/routes.js");

const BeanFactory = require("./BeanFactory");

function readCtrl () {

}

class RouterDispatcher {
    constructor (app) {
        this.app = app;
        this.beanFactory = BeanFactory.getBeanFactory();
    }

    parseRouters () {
        for (let path in routerCfg) {
            let handler = routerCfg[path].handler;
            let ctrlId = handler.split(".")[0];
            let ctrlMethodName = handler.split(".")[1];
            let requestMethod = routerCfg[path].requestMethod;
            switch (requestMethod) {
              case "get" :
                router.get(path, async (ctx, next) => {
                  let ctrl = this.beanFactory.getInstanceById(ctrlId);
                  ctrl.ctx = ctx;
                  await ctrl[ctrlMethodName](ctx,next);

                });
                break;
              case "post" :
                router.post(path, async (ctx, next) => {
                  let ctrl = this.beanFactory.getInstanceById(ctrlId);
                  ctrl.ctx = ctx;
                  await ctrl[ctrlMethodName](ctx, next);

                });
                break;
              default :
                router.all(path, async (ctx, next) => {
                  let ctrl = this.beanFactory.getInstanceById(ctrlId);
                  ctrl.ctx = ctx;
                  await ctrl[ctrlMethodName](ctx, next);

                });
            }
        }
    }
}



module.exports = {
    initRouter : (app) =>
        {
            let routerDispatcher = new RouterDispatcher(app);
            routerDispatcher.parseRouters();
            return router
        }
}