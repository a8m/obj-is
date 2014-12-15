'use strict';
var should = require('should');
var is     = require('./');

describe('is', function() {
  describe('generate is functions', function() {
    it('should return a function', function() {
      is(Object).should.be.type('function');
      is(Object, true).should.be.type('function');
    });

    it('should use `constructor.name` if inherit not set', function() {
      is(Object).toString().should.containEql('constructor.name')
    });

    it('should use `instanceof` if inherit set to true', function() {
      is(Object, true).toString().should.containEql('instanceof')
    });

    it('should return isFunction', function() {
      function Person() {}
      var a = new Person();
      var b = new Array(1);
      var isPerson = is(Person);
      var isObject = is(Object, true);

      should(isPerson(a)).eql(true);
      should(isPerson(b)).eql(false);

      should(isObject(a)).eql(true);
      should(isObject(b)).eql(true);
    });
  });

  describe('static functions', function() {
    describe('.string()', function() {
      it('should test if given value is string', function() {
        is.string('Ariel').should.eql(true);
        is.string(1).should.eql(false);
      });
    });

    describe('.array()', function() {
      it('should test if given value is array', function() {
        is.array([]).should.eql(true);
        is.array(1).should.eql(false);
      });
    });

    describe('.date()', function() {
      it('should test if given value is date', function() {
        is.date(new Date()).should.eql(true);
        is.date(1).should.eql(false);
      });
    });

    describe('.object()', function() {
      it('should test if given value is object', function() {
        is.object({}).should.eql(true);
        is.object(1).should.eql(false);
      });
    });

    describe('.defined() .undefined()', function() {
      it('should test if given value is un/defined', function() {
        is.undefined(undefined).should.eql(true);
        is.undefined({}).should.eql(false);

        is.defined({}).should.eql(true);
        is.defined(undefined).should.eql(false);
      });
    });

    describe('.promise()', function() {
      it('should test if given value is promise', function() {
        is.promise({then: new Function}).should.eql(true);
      });
    });

    describe('.function()', function() {
      it('should test if given value is function', function() {
        is.function(new Function).should.eql(true);
        is.function({}).should.eql(false);
      });
    });

    describe('.number()', function() {
      it('should test if given value is number', function() {
        is.number(1).should.eql(true);
        is.number({}).should.eql(false);
      });
    });

    describe('.integer()', function() {
      it('should test if given value is integer', function() {
        is.integer(1).should.eql(true);
        is.integer(1e9).should.eql(true);
        is.integer(-1).should.eql(true);

        is.integer(1.00123).should.eql(false);
        is.integer(-0.1).should.eql(false);
        is.integer(Infinity).should.eql(false);
        is.integer(-Infinity).should.eql(false);
        is.integer('').should.eql(false);
        is.integer({}).should.eql(false);
      });
    });
  });
});