const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('some', () => {
    require('../solutions/reduce');
    require('../solutions/some');

    const contextChecker = require('./contextChecker');
    const code = fs.readFileSync('solutions/some.js', {encoding: 'utf8'});

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    test(`should return true if any item of array satisfies given predicate`, () => {
        expect(some(numbers, n => n > 5)).to.be.true;
    });

    test(`should return false if no item of array satisfies given predicate`, () => {
        expect(some(numbers, n => false)).to.be.false;
    });

    test(`should break after first truthy result`, () => {
        let count = 0;
        some(numbers, n => {
            count++;
            return n > 5;
        });

        expect(count).to.not.equal(numbers.length);
    });

    test(`should run till the end if not getting truthy result`, () => {
        count = 0;
        some(numbers, n => {
            count++;
            return n < -1;
        });

        expect(count).to.equal(numbers.length);
    })

    contextChecker.checkAll(some);

    test(`should use reduce`, () => {
        expect(/[^\.]\breduce\b\s*\(/.test(code)).to.be.true;
    });
});
