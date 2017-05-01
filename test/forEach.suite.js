'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('forEach', () => {
    require('../solutions/forEach');

    const contextChecker = require('./contextChecker');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    test(`should iterate from left to right over all items in the array`, () => {
        const clone = new Array(numbers.length);

        forEach(numbers, (n, i) => {
            clone[i] = n;
        });

        expect(clone).to.deep.equal(numbers);
    });

    contextChecker.checkAll(forEach);

    test(`should skip not existing items in sparse array`, () => {
        var sparseArray = [1, 2, 3, 4, , , , , 9, 10];

        const clone = [];
        forEach(sparseArray, n => {
            clone.push(n);
        });

        expect(clone.length).to.not.equal(sparseArray.length);
    });
});
