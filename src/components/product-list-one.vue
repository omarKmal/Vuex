<template>
  <div>
    <div id="product-list-one">
      <h2>Product List One</h2>
      <ul>
        <li v-for="(product, index) in saleProducts" :key="index">
          <span class="name">{{ product.name }}</span>
          <span class="price"> ${{ product.price }}</span>
        </li>
      </ul>
      <button @click="reducePrice(4)">Reduce price</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    // first way
    // saleProduct() {
    //   return this.$store.getters.saleProducts;
    // },

    // second way
    ...mapGetters(["saleProducts"]),
  },
  methods: {
    // for mutations
    // reducePrice() {
    //   return this.$store.commit("reducePrice");
    // },

    // with actions
    // reducePrice(amount) {
    //   this.$store.dispatch("reducePrice", amount);
    // },

    // with mapAcitons

    ...mapActions(["reducePrice"]),
  },
  mounted() {
    console.log(this.$store.getters.saleProducts);
  },
};
</script>

<style lang="scss" scoped >
#product-list-one {
  background-color: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 2);
  margin-bottom: 30px;
  padding: 10px 20px;

  ul {
    padding: 0;

    li {
      display: inline-block;
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.7);

      .price {
        font-weight: bold;
        color: #860ce8;
      }
    }
  }
}
</style>