const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');

describe('capitalize string', () => {
    it('should return string with its first letter capitalized', () => {
        expect(capitalize('hello')).toBe('Hello');
    })
})

describe('reverse string', () => {
    it('reverse a single word', () => {
        expect(reverseString('hello')).toBe('olleh');
    })

    it('reverse multiple words', () => {
        expect(reverseString('good morning')).toBe('gninrom doog');
    })

    it('reverse words with numbers and punctuations', () => {
        expect(reverseString('abc 123!')).toBe('!321 cba');
    })

    it('return empty string', () => {
        expect(reverseString('')).toBe('');
    })
})

describe('simple calculator', () => {
    it('add', () => {
        expect(calculator.addNumber(1, 2)).toBe(3);
    })

    it('subtract', () => {
        expect(calculator.subtractNumber(1, 2)).toBe(-1);
    })

    it('multiply', () => {
        expect(calculator.multiplyNumber(1, 2)).toBe(2);
    })

    it('divide', () => {
        expect(calculator.divideNumber(1, 2)).toBe(0.5);
    })
})