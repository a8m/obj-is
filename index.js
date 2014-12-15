'use strict';

/**
 * @description
 * Generate and return `is` function
 * @param cstr
 * @param {Boolean=} inherit
 * @returns {Function}
 * @example
 * is(Person)(new Person) ==> true
 * is(Object, true)(new Person) ==> true
 */
function is(cstr, inherit) {
  return inherit
    ? function(obj) { return obj instanceof cstr }
    : function(obj) { return obj && obj.constructor.name === cstr.name };
}

/**
 * @description
 * reference to native isArray
 */
is.array = Array.isArray;

/**
 * @description
 * test if given value is date object
 * @param value
 * @returns {boolean}
 */
is.date = function isDate(value) {
  return toString.call(value) === '[object Date]';
};

/**
 * @description
 * test if value is defined
 * @param value
 * @returns {boolean}
 */
is.defined = function isDefined(value) {
  return typeof value !== 'undefined';
};

/**
 * @description
 * test if value is undefined
 * @param value
 * @returns {boolean}
 */
is.undefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

/**
 * @description
 * test if value is function
 * @param value
 * @returns {boolean}
 */
is.function = function isFunction(value) {
  return typeof value === 'function';
};

/**
 * @description
 * test if value is number
 * @param value
 * @returns {boolean}
 */
is.number = function isNumber(value) {
  return typeof value === 'number';
};

/**
 * @description
 * test if value is object
 * @param value
 * @returns {boolean}
 */
is.object = function isObject(value) {
  return null !== value && 'object' === typeof value;
};

/**
 * @description
 * test if value is string
 * @param value
 * @returns {boolean}
 */
is.string = function isString(value) {
  return typeof value === 'string';
};

/**
 * @description
 * test if value is Promise instance
 * @param value
 * @returns {boolean}
 */
is.promise = function isPromise(value) {
  return value && typeof value.then === 'function';
};

/**
 * @description
 * test if value is in integer
 * @param val
 * @returns {boolean}
 */
is.integer = function isInteger(val) {
  return typeof val === 'number'
    && isFinite(val)
    && val > -9007199254740992 // MIN_SAFE_INTEGER - 1
    && val < 9007199254740992  // MAX_SAFE_INTEGER + 1
    && parseInt(val) === val;
};


/**
 * @expose
 * expose is function
 */
module.exports = is;