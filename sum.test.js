const { test } = require('node:test');
const sum = require('./sum.js') ;

test('Somar 2 + 2 to equal 4', () => {
    expect(sum(2,2)).toBe(4);
});