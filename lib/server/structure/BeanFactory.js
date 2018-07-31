const fs = require('fs');
const spritConfig = require("../config/sprite");

class BeanFactory {

  constructor(dirname) {
    this.confg = spritConfig;
    this.classInstance = {};
    this.dirname = dirname;
    this.instanceContainer = new Map();

    this.loaderClass = this.loaderClass.bind(this);
    this.readClassFileAndCreateInstance = this.readClassFileAndCreateInstance.bind(this);
    this.createPropsForInstance = this.createPropsForInstance.bind(this);


    this.loaderClass();
  }


  loaderClass() {
    let classCfg = null;
    let bean = null;
    for (let i = 0; i < this.confg.length; i++) {
      classCfg = this.confg[i];
      if (!this.instanceContainer.has(classCfg.id) && classCfg.classPath && classCfg.classPath != "") {
        try {
          bean = this.readClassFileAndCreateInstance(classCfg.classPath);
          this.instanceContainer.set(classCfg.id, bean);
          classCfg.hasLoaded = true;

          // assign value for props
          if (classCfg.props) {
            this.createPropsForInstance(classCfg.props, bean);
          }

          // assign value for aop
          if (classCfg.aop) {
            this.analyzeAop(classCfg.aop, bean);
          }
        }
        catch (e) {
          console.log(e);
        }
      }

    }
  }

  readClassFileAndCreateInstance(path) {
    try {
      let ClassFile = require(this.dirname + "/" + path);
      let instance = null;
      // judge whether the file is a "class" or "object"
      if (typeof ClassFile == "function") {
        instance = new ClassFile();
      }
      else if (typeof ClassFile == "object") {
        instance = ClassFile;
      }

      return instance;
    }
    catch (e) {
      throw (e);
    }
  }

  createPropsForInstance(props, instance) {
    let bean = null;
    props.forEach((prop, index) => {

      bean = this._getInstanceByIdFormSpriteConfig(prop.id);

      instance[prop.propertyName] = bean;
    });
  }


  analyzeAop(aopConfig, instance) {
    if(aopConfig.methods) {
      aopConfig.methods.forEach((item, idx) => {
        if (Object.prototype.toString.call(instance[item.methodName]).indexOf("object AsyncFunction")) {
          let tempMethod = instance[item.methodName];

          let beforeAdvise = null;
          if (item.beforeAdvise) {
            beforeAdvise = this._createAdviseMethod(item.beforeAdvise);
          }

          let afterAdvise = null;
          if (item.afterAdvise) {
            afterAdvise = this._createAdviseMethod(item.afterAdvise);
          }


          instance[item.methodName] = async (ctx, next) => {
            if (beforeAdvise) {
              beforeAdvise.call(this, instance.constructor);
            }
            // excute main method
            await tempMethod.apply(instance, [ctx, next]);
            if (afterAdvise) {
              afterAdvise.call(this, instance.constructor);
            }
          }
        }

        else if (Object.prototype.toString.call(instance[item.methodName]).indexOf("object Function")) {
          let tempMethod = instance[item.methodName];

          let beforeAdvise = null;
          if (item.beforeAdvise) {
            beforeAdvise = this._createAdviseMethod(item.beforeAdvise);
          }

          let afterAdvise = null;
          if (item.afterAdvise) {
            afterAdvise = this._createAdviseMethod(item.afterAdvise);
          }


          instance[item.methodName] = () => {
            if (beforeAdvise) {
              beforeAdvise.call(this, instance.constructor);
            }
            // excute main method
            tempMethod.apply(instance, arguments);
            if (afterAdvise) {
              afterAdvise.call(this, instance.constructor);
            }
          }
        }
      });
    }

  }

  _createAdviseMethod(aopAdvise) {
    let aopId = aopAdvise.split(".")[0];
    let methodName = aopAdvise.split(".")[1];

    let aopInstance = this._getInstanceByIdFormSpriteConfig(aopId);

    return aopInstance[methodName];
  }

  _getInstanceByIdFormSpriteConfig (instanceId) {
    let bean = null;
    for (let i = 0; i < this.confg.length; i++) {
      let classCfg = this.confg[i];

      if (!this.instanceContainer.has(classCfg.id) && instanceId == classCfg.id && classCfg.classPath && classCfg.classPath != "") {
        bean = this.readClassFileAndCreateInstance(classCfg.classPath);
        this.instanceContainer.set(classCfg.id, bean);
        break;
      }
      else if (this.instanceContainer.has(instanceId)) {
        bean = this.instanceContainer.get(instanceId);
        break;
      }
    }
    return bean;
  }

  getInstanceById (key) {
    return this.instanceContainer.get(key);
  }
}

let beanFactory = null;


module.exports = {
  createBeanFactory : (dirname) => {
    if (beanFactory == null) {
      beanFactory = new BeanFactory(dirname);
    }
    return beanFactory;
  },
  getBeanFactory : () => {
    return beanFactory;
  }
};