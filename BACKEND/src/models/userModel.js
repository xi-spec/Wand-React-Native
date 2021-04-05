const md5 = require('md5');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  photoURL: String,
  phone: Number,
  creationDate: { type: Date, default: Date.now },
  password: String,
  address: {
    street: String,
    postcode: String,
    country: String,
    city: String,
  },
  card: {
    cardNumber: String,
    securtyCode: String,
    cardholder: String,
    expiryDate: String,
  },
  favourite: [
    Object,
  ],
  orderHistory: [
    {
      cartList: [Object],
      totalCost: Number,
      creationDate: { type: Date, default: Date.now },
    },
  ],
});

userSchema.methods.validPassword = function validPassword(psw) {
  return this.password === md5(psw);
};
module.exports = model('user', userSchema);
