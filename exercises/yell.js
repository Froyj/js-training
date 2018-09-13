'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
function yell(text){
    return text.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('a b c'), ('A B C'))
assert.deepStrictEqual(yell('a 1 c'), ('A 1 C'))
assert.deepStrictEqual(yell('a 1 c d e f'), ('A 1 C D E F'))
assert.deepStrictEqual(yell('wol.lol lo,lol'), ('WOL.LOL LO,LOL'))
// End of tests */
