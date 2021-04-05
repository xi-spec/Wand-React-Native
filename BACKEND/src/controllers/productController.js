const Product = require('../models/productModel');
require('../models/productTypeModel');

function createProduct(req, res) {
  const newProduct = new Product(req.body);

  newProduct.save();

  res.json(newProduct);
}

async function getAllProducts(req, res) {
  try {
    const productLists = await Product.find({}).populate('type');
    res.json(productLists);
  } catch {
    res.status(500);
    res.send('There was an error finding products');
  }
}

async function getOneByParm(req, res) {
  const query = req.params.productParam;

  try {
    const foundProduct = await Product.findOne({ _id: query })
      .populate('type');
    res.json(foundProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updatedProduct(req, res) {
  const id = req.params.productParam || req.body._id;

  try {
    const productUpdate = await Product
      .findByIdAndUpdate(id, req.body, { new: true }).populate('type');

    res.json(productUpdate);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating');
  }
}

function deleteProduct(req, res) {
  const id = req.params.productParam || req.body._id;
  Product.findByIdAndDelete(id, (error, deletedProduct) => {
    if (error) {
      res.status(404);
      res.send(`Error!  There are no product with this id:${id}`);
    } else {
      res.status(303);
      res.json(deletedProduct);
    }
  });
}

module.exports = {
  createProduct,
  getAllProducts,
  getOneByParm,
  updatedProduct,
  deleteProduct
};
