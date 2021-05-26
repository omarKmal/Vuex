import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },

  getters: {
    saleProducts(state) {
      let saleProducts = state.products.map((product) => {
        return {
          name: product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },

  mutations: {
    reducePrice(state, payload) {
      setTimeout(() => {
        state.products.forEach((product) => {
          product.price -= payload;
        });
      }, 3000);
    },
  },

  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit("reducePrice", payload);
      }, 2000);
    },
  },
});

export default store;
