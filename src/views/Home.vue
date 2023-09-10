<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';
import ProductList from '../components/ProductList.vue'

const store = useStore()

const products = computed(() => {
  console.log(products)
  return store.state.products;
});

</script>

<template>
  <main class="bg-purple-400">
    <div class="flex py-20 px-20 justify-center">
      <input
        type="text"
        class="rounded border-2 border-purple-700 w-full text-2xl text-orange-500 placeholder:text-orange-300 active:border-purple-700"
        placeholder="Procurar pelos produtos"
      />
    </div>

    <ProductList :products="products"/>
  </main>
</template>
