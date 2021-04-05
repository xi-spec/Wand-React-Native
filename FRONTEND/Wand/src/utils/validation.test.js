import { hasNameError, hasEmailError, hasPasswordError, hasConfirmPasswordError } from './validation';

describe('Given a hasNameError function ', () => {
  describe('Whenn is invoke with name.length < 2', () => {
    test('Then will return true', () => {
      const name = 'x';
      const result = hasNameError(name);

      expect(result).toBe(true);
    });
  });
});

describe('Given a hasEmailError function ', () => {
  describe('When is invoke without @', () => {
    test('Then will return true', () => {
      const email = 'xi.com';
      const result = hasEmailError(email);

      expect(result).toBe(true);
    });
  });
});

describe('Given a hasPasswordError function ', () => {
  describe('When is invoke with length of < 8', () => {
    test('Then will return true', () => {
      const psw = '1234';
      const result = hasPasswordError(psw);
      expect(result).toBe(true);
    });
  });
});

describe('Given a hasConfirmPasswordError function ', () => {
  describe('When is invoke with 2 diferents argument value', () => {
    test('Then will return true', () => {
      const psw = '1234';
      const confirmPsw = '2222';
      const result = hasConfirmPasswordError(psw, confirmPsw);
      expect(result).toBe(true);
    });
  });
});
