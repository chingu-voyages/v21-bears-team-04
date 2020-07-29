import capitalize from './capitalize';

describe('capitalize', () => {
  test('should work', () => {
    expect(capitalize('foo')).toBe('Foo');
  });

  test('should throw error when not used correctly', () => {
    expect(() => {
      capitalize();
    }).toThrowError(/expects a string argument/);
  });
});
