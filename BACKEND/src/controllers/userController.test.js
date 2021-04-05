const {
  createUser,
  updateUser,
  getAllUsers,
} = require('./userController');

const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given a createUser function', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    req = { body: {} };
  });
  describe('When is invoked', () => {
    test('Shoud call res.json when not found an error', () => {
      createUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a updateUser function', () => {
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
        _id: null,
      },
      params: {
        userId: null,
      },

    };
  });
  describe('When is invoked', () => {
    test('Shoud call res.json with req.body._id when not found an error', async () => {
      req.body._id = 1;
      User.findOneAndUpdate.mockReturnValueOnce({});
      await updateUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.json with req.params when not found an error', async () => {
      req.params.userId = 1;
      User.findByIdAndUpdate.mockReturnValueOnce({});
      await updateUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.send when found an error', async () => {
      User.findByIdAndUpdate.mockImplementationOnce(() => {
        throw new Error('There was an error updating');
      });
      await updateUser(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('Given a getAllUsers function', () => {
    describe('When is invoked', () => {
      test('Then should call res.json when not found an error', async () => {
        User.find.mockReturnValueOnce({});

        await getAllUsers(req, res);

        expect(res.json).toHaveBeenCalled();
      });
      test('Then should call res.send when found an error', async () => {
        User.find.mockImplementationOnce(() => { throw new Error(); });

        await getAllUsers(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
