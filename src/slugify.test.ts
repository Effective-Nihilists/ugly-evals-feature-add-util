import { describe, expect, it } from 'vitest';
import { slugify } from './slugify.js';

describe('slugify', () => {
  it('lowercases ASCII letters', () => {
    expect(slugify('HelloWorld')).toBe('helloworld');
  });

  it('replaces spaces with dashes', () => {
    expect(slugify('hello world')).toBe('hello-world');
  });

  it('collapses runs of non-alphanumerics into a single dash', () => {
    expect(slugify('a  !!  b')).toBe('a-b');
  });

  it('trims leading and trailing dashes', () => {
    expect(slugify('  !hello-world!  ')).toBe('hello-world');
  });

  it('keeps numbers', () => {
    expect(slugify('v1.2.3-beta')).toBe('v1-2-3-beta');
  });

  it('returns empty string for all-garbage input', () => {
    expect(slugify('!!!')).toBe('');
  });
});
