const { model, Schema } = require('mongoose');

const productTypeSchema = new Schema({
  name: String,
  image: String
});

module.exports = model('ProductType', productTypeSchema);
