<template>
  <main>
    <h1 class="text-6xl text-center my-10">Seu carrinho</h1>

    <div class="mx-20 mb-10">
      <h3 class="text-3xl">Total Amount: R$ {{ total }}</h3>
      <h3 class="text-3xl">Total Amount: R$ {{ quantity }}</h3>
    </div>

    <CartList :products="products" />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import CartList from '../components/CartList.vue'

const store = useStore()

const total = computed(() => {
  return store.state.cart.total
})

const products = computed(() => {
  return store.getters['cart'];
});

const quantity = computed(() => {
  return store.getters['quantity'];
});
</script>

<style></style>
