'ues strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');

global.window = global;

suite('reduceRight', () => {
    require('../solutions/reduceRight');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const prod = numbers.reduceRight((r, a) => r * a);
    const sum = numbers.reduceRight((r, a) => r + a);
    const lastOfArr = arr => arr[arr.length - 1];
    const init = 10;

    test(`should take last item as initialValue when the initialValue is not passed`, () => {
        expect(reduceRight(numbers, (r, a) => r * a)).to.equal(prod);
        expect(reduceRight(numbers, (r, a) => r + a)).to.equal(sum);

        var arr = [];
        reduceRight(numbers, r => {
            arr.push(r);
        });

        expect(arr[0]).to.equal(lastOfArr(numbers));
    });

    test(`should pass initialValue as first argument for the first item of array`, () => {
        expect(reduceRight(numbers, (r, a) => r * a, init)).to.equal(prod * init);
        expect(reduceRight(numbers, (r, a) => r + a, init)).to.equal(sum + init);

        var arr = [];
        reduceRight(numbers, r => {
            arr.push(r);
        }, init);

        expect(arr[0]).to.equal(init);
    });

    test(`should iterate from rigth to left over all items in the array`, () => {
        const clone = reduceRight(numbers, (arr, n) => {
            arr.push(n);
            return arr;
        }, []);

        expect(clone).to.not.deep.equal(numbers);
        expect(clone.reverse()).to.deep.equal(numbers);
    });

    test(`should skip not existing items in sparse array`, () => {
        var sparseArray = [1, 2, 3, 4, , , , , 9, 10];

        const clone = reduceRight(sparseArray, (arr, n) => {
            arr.push(n);
            return arr;
        }, []);

        expect(clone.length).to.not.equal(sparseArray.length);
    });
});
