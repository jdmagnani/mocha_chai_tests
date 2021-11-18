"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var app_1 = require("../app");
var app;
describe('App tests', function () {
    beforeEach(function () {
        app = new app_1.App();
    });
    describe('Tests for sayHello: ', function () {
        it('App should return hello', function () {
            var result = app.sayHello();
            chai_1.assert.equal(result, 'hello');
        });
        it('sayHello should retun type string', function () {
            var result = app.sayHello();
            chai_1.assert.typeOf(result, 'string');
        });
    });
    describe('Tests for addNumbers: ', function () {
        it('Sum of two numbers', function () {
            var value1 = 10;
            var value2 = 10;
            var result = app.addNumbers(value1, value2);
            chai_1.assert.equal(result, (value1 + value2));
        });
        it('addNumbers should be above 5', function () {
            var result = app.addNumbers(5, 5);
            chai_1.assert.isAbove(result, 5);
        });
        it('addNumbers shuold return a number', function () {
            var result = app.addNumbers(2, 3);
            chai_1.assert.typeOf(result, 'number');
        });
    });
});
