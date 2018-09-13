'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function yell(text){
    return text.toLowerCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('A B C'), ('a b c'))
assert.deepStrictEqual(yell('A 1 C'), ('a 1 c'))
assert.deepStrictEqual(yell('A 1 C D E F'), ('a 1 c d e f'))
assert.deepStrictEqual(yell('WOL.LOL LO,LOL'), ('wol.lol lo,lol'))
// End of tests */
