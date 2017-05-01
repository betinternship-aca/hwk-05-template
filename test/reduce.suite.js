'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');

global.window = global;

suite('reduce', () => {
    require('../solutions/reduce');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const prod = numbers.reduce((r, a) => r * a);
    const sum = numbers.reduce((r, a) => r + a);
    const init = 10;

    test(`should take first item as initialValue when the initialValue is not passed`, () => {
        expect(reduce(numbers, (r, a) => r * a)).to.equal(prod);
        expect(reduce(numbers, (r, a) => r + a)).to.equal(sum);

        var arr = [];
        reduce(numbers, r => {
            arr.push(r);
        });

        expect(arr[0]).to.equal(numbers[0]);
    });

    test(`should pass initialValue as first argument for the first item of array`, () => {
        expect(reduce(numbers, (r, a) => r * a, init)).to.equal(prod * init);
        expect(reduce(numbers, (r, a) => r + a, init)).to.equal(sum + init);
        expect(typeof reduce(numbers, (r, a) => r + a, '')).to.equal('string');

        var arr = [];
        reduce(numbers, r => {
            arr.push(r);
        }, init);

        expect(arr[0]).to.equal(init);
    });

    test(`should iterate from left to right over all items in the array`, () => {
        const clone = reduce(numbers, (arr, n) => {
            arr.push(n);
            return arr;
        }, []);

        expect(clone).to.deep.equal(numbers);
    });

    test(`should skip not existing items in sparse array`, () => {
        var sparseArray = [1, 2, 3, 4, , , , , 9, 10];

        const clone = reduce(sparseArray, (arr, n) => {
            arr.push(n);
            return arr;
        }, []);

        expect(clone.length).to.not.equal(sparseArray.length);
    });
});
