'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(text){
    return text.substring(0, 2);
}

function keepLast(text){
    return text.substring(text.length-2, text.length);
}

function keepFirstLast(text){
    return text.substring(0, 2) + text.substring(text.length-2, text.length);    ;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirst('a b c'), ('a '))
assert.deepStrictEqual(keepFirst('a 1 c'), ('a '))
assert.deepStrictEqual(keepFirst('a 1 c d e f'), ('a '))
assert.deepStrictEqual(keepFirst('wol.lol lo,lol'), ('wo'))
assert.deepStrictEqual(keepLast('a b c'), (' c'))
assert.deepStrictEqual(keepLast('a 1 c'), (' c'))
assert.deepStrictEqual(keepLast('a 1 c d e f'), (' f'))
assert.deepStrictEqual(keepLast('wol.lol lo,lol'), ('ol'))
assert.deepStrictEqual(keepFirstLast('a b c'), ('a  c'))
assert.deepStrictEqual(keepFirstLast('a 1 c'), ('a  c'))
assert.deepStrictEqual(keepFirstLast('a 1 c d e f'), ('a  f'))
assert.deepStrictEqual(keepFirstLast('wol.lol lo,lol'), ('wool'))
// End of tests */
