<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import ProductList from '../components/ProductList.vue'

const store = useStore()

const searchQuery = computed({
  get: () => store.state.products.searchQuery,
  set: (value) => store.dispatch('updateSearchQuery', value)
})

const selectedTypeFilter = computed({
  get: () => store.state.products.selectedTypeFilter,
  set: (value) => store.dispatch('updateSelectedTypeFilter', value)
})

// Pegando os tipos de roupas dos dados
const uniqueTypes = store.getters['uniqueTypes']

const filteredProducts = computed(() => {
  const products = store.state.products.products
  let filteredProducts = [...products]

  // Aplicar filtro por nome
  if (store.state.products.searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(store.state.products.searchQuery.toLowerCase())
    )
  }

  // Aplicar filtro por tipo/categoria de roupa
  if (store.state.products.selectedTypeFilter) {
    filteredProducts = filteredProducts.filter(
      (product) => product.type === store.state.products.selectedTypeFilter
    )
  }

  return filteredProducts
})
</script>

<template>
  <main class="">
    <div class="flex py-20 px-20 justify-center lg:max-md:flex-row max-sm:flex-col">
      <input
        type="text"
        class="rounded border-2 border-purple-400 w-full text-2xl text-orange-500 placeholder:text-orange-400 active:border-purple-700 max-[640px]:mb-5"
        placeholder="Procurar pelos produtos"
        v-model="searchQuery"
      />

      <select
        class="rounded border-2 border-purple-400 text-xl text-orange-500 w-[12rem] max-sm:w-full sm:ml-5 placeholder:text-orange-400 active:border-purple-700 max-[640px]:w-full"
        v-model="selectedTypeFilter"
      >
        <option value="">Tipo de roupa</option>
        <option v-for="type in uniqueTypes" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

    <ProductList :products="filteredProducts" />
  </main>
</template>

<style scoped></style>
