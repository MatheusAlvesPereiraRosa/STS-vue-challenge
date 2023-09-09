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
  <main>
    <div class="flex my-20 mx-20 justify-center">
      <input
        type="text"
        class="rounded border-2 border-purple-700 w-full text-2xl"
        placeholder="Procurar pelos produtos"
      />
    </div>

    <ProductList :products="products"/>
  </main>
</template>
