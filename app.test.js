const capitalize = require('./capitalize');
const reverseString = require('./reverseString');

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