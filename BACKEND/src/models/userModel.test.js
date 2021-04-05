const User = require('./userModel');

describe('Given a User model', () => {
  describe('When is invoked method validPassword with 12345 in a user with password 827ccb0eea8a706c4c34a16891f84e7b', () => {
    test('Then should return true', () => {
      const user = new User({ password: '827ccb0eea8a706c4c34a16891f84e7b' });
      const answer = user.validPassword('12345');
      expect(answer).toBe(true);
    });
  });
});
