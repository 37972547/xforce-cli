
import * as fetchAlias from 'ljz-fetch';
import Middleware from './Middleware';

class HttpRequest {
  constructor() {
    this._request = this._request.bind(this);
    this.requestMiddlewareArray = [];
    this.responseMiddlewareArray = [];
    this.requestMiddleware = new Middleware(this.requestMiddlewareArray);
    this._setRequestHead = this._setRequestHead.bind(this);

    this.responseMiddleware = new Middleware(this.responseMiddlewareArray);
    this._responseErrorHandler = this._responseErrorHandler.bind(this);

    this.responseHandler = this.responseHandler.bind(this);

    this.init = this.init.bind(this);
    this.init();
  }

  _request(option) {
    let url = option.url;
    delete option.url;
    return window.fetch(url, option)
      .then((res) => {
        res = res.json();
        this.responseHandler(res);
        return res;
      })
  }

  setRequestMiddleWare(handler) {
    this.requestMiddleware.useMiddleWareHandler(handler);
  }

  setResponseMiddleWare(handler) {
    this.responseMiddleware.useMiddleWareHandler(handler);
  }

  _setRequestHead(data, next) {
    data = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      ...data
    };

    return next(data, next);
  }

  // TO DO : xxxxxxx
  _responseErrorHandler(data, next) {
    return next(data, next);
  }

  responseHandler(data) {
    return this.responseMiddleware.runMiddlewares(data);
  }

  ajaxRequest(data) {
    return this.requestMiddleware.runMiddlewares(data);
  }

  init() {
    this.setRequestMiddleWare(this._setRequestHead);
    this.setRequestMiddleWare(this._request);

    this.setResponseMiddleWare(this._responseErrorHandler);
  }
}

export default HttpRequest;
