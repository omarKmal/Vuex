// IMPORTANT -- See  explain the lesson in the papers

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  // state like a data function in component 
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },

  // getter is like a computed object in component 
  getters: {
    saleProducts(state)  {
      let saleProducts = state.products.map((product) => {
        return {
          name: product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
});

export default store;

// mutations is like method 

mutations: {
  reducePrice(state) {
    state.products.forEach((product) => {
      product.price -= 1;
    });
  },
},

// state is the date 

// import state data in the component in computed object

computed: {
  products() {
    return this.$store.state.products;
  },
},

// import getters in the component in computed object

computed: {
  saleProducts(){
    return this.$store.getters.saleProducts;
  }
}


// import mutations in the componenet in method object

methods: {
  reducePrice() {
    this.$store.commit("reducePrice");
  },



// the last lesson 

import { mapActions } from "vuex";
import { mapGetters } from "vuex";


methods: {

  ...mapGetters(["saleProducts"]),
  },
}

computed : {
  ...mapActions(["reducePrice"]),
}