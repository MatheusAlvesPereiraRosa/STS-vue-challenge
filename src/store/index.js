import { createStore } from 'vuex'

import products from './modules/products'
import cart from './modules/cart'

const store = createStore({
  modules: {
    products: products,
    cart: cart
  }
})

export default store
