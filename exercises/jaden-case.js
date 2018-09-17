'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(text) {
    let arrWord = text.toLowerCase().split(' ');
    let retext='';
    for (let idWord = 0; idWord < arrWord.length; idWord++){
        retext += arrWord[idWord].charAt(0).toUpperCase() +  arrWord[idWord].slice(1, arrWord[idWord].length);
        if (idWord < arrWord.length-1) {
            retext += ' ';
        }
    }
    return retext;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('salut tout le monde'), 'Salut Tout Le Monde')
assert.strictEqual(jadenCase('izi moni IZI laïf'), 'Izi Moni Izi Laïf')
assert.strictEqual(jadenCase('roses are red, violets are blue, love bacon'), 'Roses Are Red, Violets Are Blue, Love Bacon')
assert.strictEqual(jadenCase('zap ZAP'), 'Zap Zap')
// End of tests */
