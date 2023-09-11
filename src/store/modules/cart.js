export default {
  state: {
    cart: [],
    total: 0,
    qty: 0,
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.cart.findIndex(
        (ci) => ci.id === productData.id
      );
      if (productInCartIndex >= 0) {
        state.cart[productInCartIndex].qty++;
      } else {
        const newItem = {
          id: productData.id,
          name: productData.name,
          type: productData.type,
          imageUrl: productData.imageUrl,
          price: productData.price,
          qty: 1,
        };
        state.cart.push(newItem);
      }
      state.qty++;
      state.total += productData.price;

      console.log(state.cart)
      console.log(state.total)
    },

    removeProductFromCart(state, payload) {
      const prodId = payload.id;
      const productInCartIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === prodId
      );
      const prodData = state.cart[productInCartIndex];
      state.cart.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },
  },
  actions: {
    addToCart(context, payload) {
      //console.log(context)
      //console.log(payload.id)
      const prodId = payload.id;
      const products = context.rootGetters.filteredProducts;
      console.log(products)
      const product = products.find((prod) => prod.id === prodId);
      context.commit("addProductToCart", product);
    },
    removeFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    },
    cart(state) {
      return state.cart;
    }
  },
}