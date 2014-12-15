#obj-is
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
> is-function's creator

## Install
```sh
$ npm install --save obj-is
```

##Usage
####`is(constructor, inherit[boolean])`
```js
var is = require('obj-is');

// Person Constructor
function Person(name) {
  this.name = name;
}

// Create `isPerson` function
var isPerson = is(Person);
isPerson(new Person('foo')); // → true
isPerson({});                // → false

// if inherit set to true its test with the `instanceof` operator
var isObject = is(Object, true);
isObject(new Person('bar')); // → true
```

##Table of contents:
- [is](#is)
- [static functions](#statismethods)
  - [is.array](#isarray)
  - [is.date](#isdate)
  - [is.defined](#isdefined)
  - [is.undefined](#isundefined)
  - [is.function](#isfunction)
  - [is.integer](#isinteger)
  - [is.object](#isobject)
  - [is.number](#isnumber)
  - [is.promise](#ispromise)
  - [is.string](#isstring)

## License

MIT © [Ariel Mashraki](https://github.com/a8m)
[npm-image]: https://img.shields.io/npm/v/obj-is.svg?style=flat-square
[npm-url]: https://npmjs.org/package/obj-is
[travis-image]: https://img.shields.io/travis/a8m/obj-is.svg?style=flat-square
[travis-url]: https://travis-ci.org/a8m/obj-is
[coveralls-image]: https://img.shields.io/coveralls/a8m/obj-is.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/a8m/obj-is
[david-image]: http://img.shields.io/david/a8m/obj-is.svg?style=flat-square
[david-url]: https://david-dm.org/a8m/obj-is
[license-image]: http://img.shields.io/npm/l/obj-is.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/obj-is.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/obj-is
