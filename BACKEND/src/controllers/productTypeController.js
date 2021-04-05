const ProductType = require('../models/productTypeModel');

function createProductType(req, res) {
  const newProductType = new ProductType(req.body);

  newProductType.save();

  res.json(newProductType);
}

async function getAllProductType(req, res) {
  try {
    const typeList = await ProductType.find({});
    res.json(typeList);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function getOneProductTypeByParm(req, res) {
  const { typeParam } = req.params;

  try {
    const foundType = await ProductType.findOne({ _id: typeParam });
    res.json(foundType);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updatedProductType(req, res) {
  const id = req.params.typeParam || req.body._id;

  try {
    const typeUpdate = await ProductType
      .findByIdAndUpdate(id, req.body, { new: true });

    res.json(typeUpdate);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating');
  }
}

module.exports = {
  createProductType,
  getAllProductType,
  getOneProductTypeByParm,
  updatedProductType
};
