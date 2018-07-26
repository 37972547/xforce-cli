
export default class Middleware {
  constructor (middlerwaredArray = []) {
    this.middlewaredArray = middlerwaredArray;
    this.runMiddlewares = this.runMiddlewares.bind(this);
    this.useMiddleWareHandler = this.useMiddleWareHandler.bind(this);
  }

  useMiddleWareHandler (middleware) {
    if (middleware) {
      this.middlewaredArray.push(middleware);
    }
  }

  runMiddlewares (data) {
    let i = 0;
    let next = (data, next) => {
      i++;
      if (this.middlewaredArray[i]) {
        return this.middlewaredArray[i](data, next);
      }
    };

    return this.middlewaredArray[i](data, next);
  }
}
