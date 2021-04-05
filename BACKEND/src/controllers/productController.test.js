const {
  createProduct,
  getAllProducts,
  getOneByParm,
  updatedProduct,
  deleteProduct
} = require('./productController');

const Product = require('../models/productModel');

jest.mock('../models/productModel');

describe('Given a createProduct function', () => {
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
      createProduct(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getAllProducts function', () => {
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
      Product.find.mockReturnValueOnce({ populate: jest.fn() });

      await getAllProducts(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.send when found an error', async () => {
      Product.find.mockImplementationOnce(() => {
        throw new Error('There was an error updating');
      });

      await getAllProducts(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a getOneByParm function', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      params: {}
    };
  });

  describe('Wnen is invoked', () => {
    test('Shoud call res.json when not found an error', async () => {
      Product.findOne.mockReturnValueOnce({ populate: jest.fn() });

      await getOneByParm(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.send when found an error', async () => {
      Product.findOne.mockImplementationOnce(() => {
        throw new Error('There was an error updating');
      });

      await getOneByParm(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a updatedProduct function', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      params: { productParam: null },
      body: { _id: null }
    };
  });

  describe('Wnen is invoked', () => {
    test('Shoud call res.json with req.params and when not found an error', async () => {
      req.params.productParam = 1;

      Product.findByIdAndUpdate.mockReturnValueOnce({ populate: jest.fn() });

      await updatedProduct(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.json with req.body._id and when not found an error', async () => {
      req.body._id = 1;

      Product.findByIdAndUpdate.mockReturnValueOnce({ populate: jest.fn() });

      await updatedProduct(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.send when found an error', async () => {
      Product.findByIdAndUpdate.mockImplementationOnce(() => {
        throw new Error('There was an error updating');
      });

      await updatedProduct(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteProduct function', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      params: { productParam: null },
      body: { _id: null }
    };
  });

  describe('Wnen is invoked', () => {
    test('Shoud call res.json with req.params and when not found an error', () => {
      req.params.productParam = 1;

      Product.findByIdAndDelete.mockImplementationOnce((
        query, callback
      ) => { callback(false, {}); });

      deleteProduct(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.json with req.body._id and when not found an error', async () => {
      req.body._id = 1;

      Product.findByIdAndDelete.mockImplementationOnce((
        query, callback
      ) => { callback(false, {}); });

      deleteProduct(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Shoud call res.send when found an error', async () => {
      Product.findByIdAndDelete.mockImplementationOnce((
        query, callback
      ) => { callback(true, {}); });

      await deleteProduct(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
