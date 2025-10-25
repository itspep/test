import capitalize from '../src/capitalize.js';

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('works with already capitalized words', () => {
  expect(capitalize('World')).toBe('World');
});

test('handles empty string', () => {
  expect(capitalize('')).toBe('');
});
