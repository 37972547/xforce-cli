// fetch接口-勿删
import HttpRequest from './HttpRequest';

let httpRequest = new HttpRequest();

const fetch = function(data) {
  return httpRequest.ajaxRequest(data);
}

const trim = function (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
};

const type = function(v) {
  return Object.prototype.toString.call(v);
};

const isObject = function(v) {
  return !!v && type(v) === '[object Object]';
};

const isNumber = function(v) {
  return typeof v === 'number';
};

const isBoolean = function(v) {
  return typeof v === 'boolean';
};

const isDate = function(v) {
  return type(v) === '[object Date]';
};

const isString = function(v) {
  return typeof v === 'string';
};

const isArray = function(v) {
  return type(v) === '[object Array]';
};
const isFunction = function(v) {
  return type(v) === '[object Function]';
};

export {
  trim,
  fetch,
  isObject,
  isNumber,
  isBoolean,
  isDate,
  isString,
  isArray,
  isFunction
};
