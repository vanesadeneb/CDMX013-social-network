/**
 * @jest-environment jsdom
 */
import { signUp } from '../src/components/sign-up';

jest.mock('../src/lib/imports.js');
jest.mock('../src/main.js');

describe('The authentication of sign up', () => {
  test('this is a function', () => {
    expect(typeof signUp).toBe('function');
  });

  test('It exists a sing up button', () => {
    const element = signUp();
    const btn = element.querySelector('#sign-up');
    expect(btn).not.toBeNull();
  });
});
