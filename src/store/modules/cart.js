export default {
  store: {
    state: {
      cart: [],
      cartTotal: 0,
    }
  },
  mutations: {
    async initialiseStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }
      if (localStorage.getItem('cartTotal')) {
        state.cartTotal = parseFloat(localStorage.getItem('cartTotal'))
      }
      return true;
    },
    addRemoveCart(state, payload) {

      // Adicionando ou removendo item
      payload.toAdd ?
        state.cart.push(payload.product) :
        state.cart = state.cart.filter(function (obj) {
          return obj.id !== payload.product.id;
        });

      // Calculando o total
      state.cartTotal = state.cart.reduce((accumulator, object) => {

        return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      }, 0);

      // Salvando no local storage do navegador
      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateCart(state, payload) {
      // Atualizando a quantidade
      state.cart.find(o => o.id === payload.product.id).qty = payload.product.qty;

      // Calculando o total
      state.cartTotal = state.cart.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      }, 0);

      // Salvando no local storage
      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  actions: {},
  getters: {},
}