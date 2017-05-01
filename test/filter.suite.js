const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('filter', () => {
    require('../solutions/reduce');
    require('../solutions/filter');

    const contextChecker = require('./contextChecker');
    const code = fs.readFileSync('solutions/filter.js', {encoding: 'utf8'});

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    test(`should return the copy of array if always truthy predicate is passed`, () => {
        const numbersClone = filter(numbers, () => true);
        expect(numbersClone).to.deep.equal(numbers);
    });

    test(`should return filtered aray which includes only the items which satisfy to given predicate`, () => {
        const predicate = n => n < 5;
        const filterdNumbers = filter(numbers, predicate);

        expect(filterdNumbers.length).to.equal(4);
        expect(filterdNumbers.every(predicate)).to.be.true;
    });

    test(`should return empty array for always falsy predicate`, () => {
        const filterdNumbers = filter(numbers, () => false);

        expect(filterdNumbers).to.be.empty;
    });

    contextChecker.checkAll(filter);

    test(`should use reduce`, () => {
        expect(/[^\.]\b.reduce\b\s*\(/.test(code)).to.be.true;
    });
});
