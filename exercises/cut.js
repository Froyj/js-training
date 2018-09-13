'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

//* Begin of tests
const assert = require('assert')

function cutFirst(text){
    return text.slice(2);
}

function cutLast(text){
    return text.slice(0, -2)
}

function cutFirstLast(text){
    return text.slice(2, -2)
}

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirst('a b c'), ('b c'))
assert.deepStrictEqual(cutFirst('a 1 c'), ('1 c'))
assert.deepStrictEqual(cutFirst('a 1 c d e f'), ('1 c d e f'))
assert.deepStrictEqual(cutFirst('wol.lol lo,lol'), ('l.lol lo,lol'))
assert.deepStrictEqual(cutLast('a b c'), ('a b'))
assert.deepStrictEqual(cutLast('a 1 c'), ('a 1'))
assert.deepStrictEqual(cutLast('a 1 c d e f'), ('a 1 c d e'))
assert.deepStrictEqual(cutLast('wol.lol lo,lol'), ('wol.lol lo,l'))
assert.deepStrictEqual(cutFirstLast('a b c'), ('b'))
assert.deepStrictEqual(cutFirstLast('a 1 c'), ('1'))
assert.deepStrictEqual(cutFirstLast('a 1 c d e f'), ('1 c d e'))
assert.deepStrictEqual(cutFirstLast('wol.lol lo,lol'), ('l.lol lo,l'))
// End of tests */
