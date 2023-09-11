<template>
  <main>
    <div class="flex flex-row justify-center items-center">
      <h1 class="text-6xl text-center text-purple-950 my-20">
        Seu carrinho
      </h1>
      <img class="w-[7rem] h-[7rem] ml-4" src="/assets/list.png" />
    </div>

    <div class="mx-20 mb-20 mt-10 border-b-4 border-red-600">
      <div class="flex justify-between mb-7">
        <h3 class="text-3xl">Quantidade de itens: {{ quantity }}</h3>
        <h3 class="text-3xl">Total:<span class="text-green-800"> R$</span> {{ total }}</h3>
      </div>
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
  return store.getters['cart']
})

const quantity = computed(() => {
  return store.getters['quantity']
})
</script>

<style></style>
