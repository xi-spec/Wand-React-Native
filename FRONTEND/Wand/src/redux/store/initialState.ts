import { InitialState } from '../../models/index';

const initialState:InitialState = {
  products: {
    allProducts: [],
    productsList: [],
    filterProducts: {
      foundList: [],
      notFound: false
    },

    selectedProduct: {
      _id: '',
      name: '',
      description: '',
      motto: '',
      cost: {
        value: 0,
        currency: ''
      },
      images: {
        alls: [
          ''

        ],
        cover: ''
      },

      weight: {
        value: 0,
        volum: ''
      },
      material: '',
      Packaging: '',
      measurements: '',
      type: {
        name: '',
        image: ''
      },
      stock: 0
    }
  },
  productsType: [],
  cart: {
    cartList: [],
    totalCost: 0
  },
  user: {
    _id: '',
    name: '',
    email: '',
    photoURL: '',
    phone: 0,
    creationDate: '',
    password: '',
    address: {
      street: '',
      postcode: '',
      country: '',
      city: ''

    },
    card: {
      cardNumber: '',
      securtyCode: '',
      cardholder: '',
      expiryDate: ''
    },
    favourite: [],
    orderHistory: [],
    isLogged: false,
    isExist: false,
    loginError: false,
    isRegisted: false

  }
};

export default initialState;
