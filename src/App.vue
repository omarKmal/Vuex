<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/product-list-one";
import ProductListTwo from "./components/product-list-two";

export default {
  name: "app",
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
  },
};
</script>

<style lang="scss">
body {
  font-family: ubuntu;
  color: #555;
}
</style>
