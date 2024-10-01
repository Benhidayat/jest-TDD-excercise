const capitalize = require('./capitalize');

describe('capitalize string', () => {
    it('should return string with its first letter capitalized', () => {
        expect(capitalize('hello')).toBe('Hello');
    })
})