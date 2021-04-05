export interface ProductType {
    name: string
    image: string
  }

export interface Product {
    _id:string
    name: string,
    description: string,
    motto: string | undefined
    cost: {
      value: number,
      currency: string
    },
    images: {
      alls: [
        string

      ],
      cover: string
    },

    weight: {
      value: number,
      volum: string
    },
    material: string,
    Packaging: string,
    measurements: string,
    type: { name: string,
      image: string },
    stock: number
  }

export interface CartList {
    _id:string
    name: string,
    description: string,
    motto: string,
    cost: {
      value: number,
      currency: string
    },
    images: {
      alls: [
        string

      ],
      cover: string
    },

    weight: {
      value: number,
      volum: string
    },
    material: string,
    Packaging: string,
    measurements: string,
    type: { name: string,
      image: string },
    stock: number,
    quantity:number
  }
export interface ShoppingCart {
    cartList:CartList[],
     totalCost:number
  }

export interface Order {
  cartList:CartList[],
  _id:string,
  totalCost:number,
creationDate: string

}
export interface User {
   _id:string | undefined
    name: string | undefined
    email: string | undefined,
    photoURL: String | undefined,
    phone: number | undefined,
    creationDate: String | undefined
    password: string | undefined
    address: {
      street: string | undefined,
      postcode: string | undefined,
      country: string | undefined,
      city: string | undefined,

    },
    card: {
      cardNumber: string,
      securtyCode: string,
      cardholder: string,
      expiryDate: string,
    },
    favourite: Product[],
    orderHistory: Order[],
    isLogged:boolean,
    isExist: boolean,
    loginError: boolean,
    isRegisted:boolean
  }
export interface FilterProducts {
  foundList:Product[] | undefined
  notFound: boolean,
}
export interface Products {
    allProducts:Product[],
    productsList:Product[],
    filterProducts:FilterProducts | object
    selectedProduct:Product | undefined
  }
export interface InitialState {
    products: Products
    productsType: ProductType[] | Array<object>,
    cart: ShoppingCart
    user: User
  }
