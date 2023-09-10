<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';
import ProductList from '../components/ProductList.vue'

const store = useStore()

const searchQuery = computed({
  get: () => store.state.products.searchQuery,
  set: (value) => store.dispatch('updateSearchQuery', value),
});

const filteredProducts = computed(() => store.getters['filteredProducts']);

</script>

<template>
  <main class="bg-purple-400">
    <div class="flex py-20 px-20 justify-center">
      <input
        type="text"
        v-model="searchQuery"
        class="rounded border-2 border-purple-700 w-full text-2xl text-orange-500 placeholder:text-orange-300 active:border-purple-700"
        placeholder="Procurar pelos produtos"
      />
    </div>

    <ProductList :products="filteredProducts"/>
  </main>
</template>
