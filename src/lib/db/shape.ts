/**
 * Checks that a saved document still matches the shape of the typed default.
 * The public pages assume that shape, so a bad save is rejected instead of stored.
 */
export function matchesShape(expected: unknown, value: unknown, key = ''): boolean {
  if (key === 'src' && value === '') return false;

  if (Array.isArray(expected)) {
    if (!Array.isArray(value) || expected.length === 0) return Array.isArray(value);
    if (key === 'cards' && value.length !== expected.length) return false;
    return value.every((item, index) => {
      const template = expected[Math.min(index, expected.length - 1)];
      return matchesShape(template, item);
    });
  }

  if (expected && typeof expected === 'object') {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const expectedRecord = expected as Record<string, unknown>;
    const valueRecord = value as Record<string, unknown>;
    const expectedKeys = Object.keys(expectedRecord);
    const valueKeys = Object.keys(valueRecord);
    if (expectedKeys.length !== valueKeys.length) return false;
    return expectedKeys.every(
      (child) =>
        child in valueRecord && matchesShape(expectedRecord[child], valueRecord[child], child),
    );
  }

  return typeof expected === typeof value;
}
