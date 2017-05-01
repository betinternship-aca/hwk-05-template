const {test} = require('mocha');
const {expect} = require('chai');

const context = {};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

exports.checkWithContext = iterationFunction => {
    iterationFunction(arr, function() {
        expect(this).to.equal(context);
    }, context);
};

exports.checkWithGlobal = iterationFunction => {
    iterationFunction(arr, function() {
        expect(this).to.equal(global);
    });
};

exports.checkWithUndefined = iterationFunction => {
    iterationFunction(arr, function() {
        'use strict';

        expect(this).to.equal(undefined);
    });
};

exports.checkAll = iterationFunction => {
    test(`should pass context as this of callback when context is passed`, () => {
        exports.checkWithContext(iterationFunction);
    });

    test(`should pass global object as this of callback when context isn't passed and callback's code isn't strict`, () => {
        exports.checkWithGlobal(iterationFunction);
    });

    test(`should pass undefined as this of callback when context isn't passed and callback's code is strict`, () => {
        exports.checkWithUndefined(iterationFunction);
    });
}
