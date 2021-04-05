const {
  createProductType,
  getAllProductType,
  getOneProductTypeByParm,
  updatedProductType
} = require('./productTypeController');

const ProductType = require('../models/productTypeModel');

jest.mock('../models/productTypeModel');

describe('Given a createProductType function', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = { body: {} };
  });

  describe('Wnen is invoked', () => {
    test('Shoud call res.json when not found an error', () => {
      createProductType(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getAllProductType function', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {};
  });

  describe('Wnen is invoked', () => {
    test('Shoud call res.json when not found an error', async () => {
      ProductType.find.mockReturnValueOnce({ });

      await getAllProductType(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.send when found an error', async () => {
      ProductType.find.mockImplementationOnce(() => {
        throw new Error('There was an error updating');
      });

      await getAllProductType(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a getOneProductTypeByParm function', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      params: {
        typeParam: 1
      }
    };
  });

  describe('Wnen is invoked', () => {
    test('Shoud call res.json when not found an error', async () => {
      ProductType.findOne.mockReturnValueOnce({ });

      await getOneProductTypeByParm(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.send when found an error', async () => {
      ProductType.findOne.mockImplementationOnce(() => {
        throw new Error('There was an error updating');
      });

      await getOneProductTypeByParm(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a updatedProductType function', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      params: {
        typeParam: null
      },
      body: {
        _id: null
      }
    };
  });

  describe('Wnen is invoked', () => {
    test('Shoud call res.json with req.params when not found an error', async () => {
      req.params.typeParam = 1;

      ProductType.findByIdAndUpdate.mockReturnValueOnce({ });

      await updatedProductType(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.json with req.body._id when not found an error', async () => {
      req.body._id = 1;

      ProductType.findByIdAndUpdate.mockReturnValueOnce({ });

      await updatedProductType(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.send when found an error', async () => {
      ProductType.findByIdAndUpdate.mockImplementationOnce(() => {
        throw new Error('There was an error updating');
      });

      await updatedProductType(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
