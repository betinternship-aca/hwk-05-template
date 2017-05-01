const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('map', () => {
    require('../solutions/reduce');
    require('../solutions/map');

    const contextChecker = require('./contextChecker');
    const code = fs.readFileSync('solutions/map.js', {encoding: 'utf8'});

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbersWrapped = map(numbers, n => new Number(n));

    test(`should redurn a new array with maped items`, () => {
        expect(numbersWrapped.every(n => n instanceof Number)).to.be.true;
    });

    test(`new array should have the same size as the given array`, () => {
        expect(numbersWrapped.length).to.equal(numbers.length);
    });

    contextChecker.checkAll(map);

    test(`should use reduce`, () => {
        expect(/[^\.]\b.reduce\b\s*\(/.test(code)).to.be.true;
    });

    test(`use Array constructor instead of initializer for reduce allocations`, () => {
        expect(/\bnew\s+Array\(/.test(code)).to.be.true;
        expect(/\[\s*\]/.test(code)).to.be.false;
    });
});
