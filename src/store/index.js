import { createStore } from 'vuex';

function getExistingCartProduct(cart, product) {
  return cart.find((p) => p.id === product.id);
}

export default createStore({
  state: {
    cart: [],
  },

  getters: {
    cart: (state) => state.cart,
  },

  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
      commit('addQuantityToProduct', { product, quantity: 1 });
    },

    changeQuantityToProduct({ commit }, { product, quantity }) {
      commit('addQuantityToProduct', { product, quantity });
    },

    removeProductFromCart({ commit }, product) {
      commit('removeProductFromCart', product);
    },

    emptyCart({ commit }) {
      commit('emptyCart');
    },
  },

  mutations: {
    addToCart(state, product) {
      const foundProduct = getExistingCartProduct(state.cart, product);
      if (!foundProduct) {
        state.cart.push(product);
      }
    },

    addQuantityToProduct(state, { product, quantity }) {
      const foundProduct = getExistingCartProduct(state.cart, product);
      foundProduct.quantity = foundProduct.quantity ? foundProduct.quantity + quantity : quantity;
      if (foundProduct.quantity < 1) {
        const productIndex = state.cart.findIndex((p) => p.id === product.id);
        if (productIndex > -1) {
          state.cart.splice(productIndex, 1);
        }
      }
    },

    removeProductFromCart(state, product) {
      const productIndex = state.cart.findIndex((p) => p.id === product.id);
      if (productIndex > -1) {
        state.cart.splice(productIndex, 1);
      }
    },

    emptyCart(state) {
      state.cart = [];
    },
  },

  modules: {},
});
