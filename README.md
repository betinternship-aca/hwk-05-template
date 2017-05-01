# homework 05

please edit files in solutions folder to provider following functionality

  - *every(a, callback[, context])*
    should return `true` if and only if every item of array `a` satisfies `callback` predicate, otherwise should return `false`. if the `context` is passed should call `callback` with passing that `context` as `this`.
  - *filter(a, callback[, context])*
    should call `callback` for every item of array `a` and include that item in the the filtered array if callback's return is truthy. should pass context as `this` of `callback` if `context` is specified.
  - *forEach(a, callback[, context])*
    should call `callback` for every item of array `a` and should pass context as `this` of `callback` if `context` is specified.
  - *map(a, callback[, context])*
    should call `callback` for every item of array `a` and return array with the resulting values of `callback`. should pass context as `this` of `callback` if `context` is specified.
  - *reduce(a, callback, initialValue)*
    should call `callback` for every item of array `a` specifying previous result as first argument of `callback`. if `initialValue` is specified then the first argument for the first item or array should be that value. otherwise should start iteration from the second item of array and pass first item as `initialValue`.
  - *reduceRight(a, callback, initialValue)*
    should to the same but iterate from right to left.
  - *some(a, callback, initialValue)*
    should return `true` if `callback` returns truthy value for any item of array, otherwise should return `false`. should pass context as `this` of `callback` if `context` is specified.

for some functions it's required to reuse your reduce it their implementation.
