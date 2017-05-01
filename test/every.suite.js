const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('every', () => {
    require('../solutions/reduce');
    require('../solutions/every');

    const contextChecker = require('./contextChecker');
    const code = fs.readFileSync('solutions/every.js', {encoding: 'utf8'});

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    test(`should return true if every item of array satisfies given predicate`, () => {
        expect(every(numbers, n => true)).to.be.true;
    });

    test(`should return false if any item of array don't satisfy gitven predicate`, () => {
        expect(every(numbers, n => n < 5)).to.be.false;
    });

    test(`should break after first falsy result`, () => {
        let count = 0;
        every(numbers, n => {
            count++;
            return n < 5;
        });

        expect(count).to.not.equal(numbers.length);
    });

    test(`should run till the end if not getting falsy result`, () => {
        count = 0;
        every(numbers, n => {
            count++;
            return true;
        });

        expect(count).to.equal(numbers.length);
    })

    contextChecker.checkAll(every);

    test(`should use reduce`, () => {
        expect(/[^\.]\breduce\b\s*\(/.test(code)).to.be.true;
    });
});
