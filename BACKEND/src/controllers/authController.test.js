const {
  register, login, logout,
} = require('./authController.js');

const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given a register function', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    req = {
      body: {
        email: 'ho@la.com',
        name: 'xi',
        password: '123',
      },
    };
  });
  describe('When is invoked', () => {
    test('Shoud call res.json when not found an error', async () => {
      User.findOne.mockReturnValueOnce(null);
      await register(req, res);

      expect(res.json).toHaveBeenCalled();
    });
    test('Shoud call res.status(500) when  found an error', async () => {
      User.mockImplementationOnce(() => {
        throw new Error('There was an error');
      });
      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });

    test('Shoud call res.status(300) when  user is exist', async () => {
      User.findOne.mockReturnValueOnce({});
      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(300);
    });
  });

  describe('Given a login function', () => {
    describe('When is invoked', () => {
      test('Then shoud call res.json when not found an error', async () => {
        User.findOne.mockReturnValueOnce({});
        await login(req, res);

        expect(res.json).toHaveBeenCalled();
      });
      test('Then shoud call res.status(500) when  found an error', async () => {
        User.findOne.mockImplementationOnce(() => { throw new Error(); });
        await login(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });

  describe('Given a logout function', () => {
    describe('When is invoked', () => {
      test('Then shoud call req.logout when ', () => {
        req = {
          logout: jest.fn(),
        };
        logout(req);

        expect(req.logout).toHaveBeenCalled();
      });
    });
  });
});
