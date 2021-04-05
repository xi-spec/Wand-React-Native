const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: String,
  description: String,
  motto: String,
  cost: {
    value: Number,
    currency: String,
  },
  images: {
    alls: [
      String,

    ],
    cover: String,
  },

  weight: {
    value: Number,
    volum: String,
  },
  material: String,
  Packaging: String,
  measurements: String,
  type: { type: Schema.Types.ObjectId, ref: 'ProductType' },
  stock: Number,
});

module.exports = model('Product', productSchema);
