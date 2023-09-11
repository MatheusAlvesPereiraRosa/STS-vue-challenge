<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import ProductList from '../components/ProductList.vue'

const store = useStore()

const searchQuery = computed({
  get: () => store.state.products.searchQuery,
  set: (value) => store.dispatch('updateSearchQuery', value)
})

const selectedPriceFilter = computed({
  get: () => store.state.products.searchQuery,
  set: (value) => store.dispatch('updatePriceFilter', value)
})

const selectedTypeFilter = computed({
  get: () => store.state.products.selectedTypeFilter,
  set: (value) => store.dispatch('updateSelectedTypeFilter', value)
})

const [minPrice, maxPrice] = store.state.products.selectedPriceRange
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

  // Aplicar filtro por preço
  filteredProducts = filteredProducts.filter((product) => {
    const price = product.price
    return price >= minPrice && price <= maxPrice
  })

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
    <div
      class="flex py-20 px-20 justify-center lg:max-md:flex-row sm:flex-col max-[640px]:flex-col"
    >
      <input
        type="text"
        class="rounded border-1 border-purple-700 w-full text-2xl text-orange-500 placeholder:text-orange-300 active:border-purple-700 max-[640px]:mb-5"
        placeholder="Procurar pelos produtos"
        v-model="searchQuery"
      />

      <div class="flex sm:justify-between sm:mt-5 max-[640px]:flex-col">
        <div class="lg:max-xl:ml-4 lg:max-xl:px-5 max-[640px]:mb-5">
          <h1 class="text-2xl">Pesquisar por preço</h1>
          <input class="w-full mt-2" type="range" id="vol" name="vol" min="0" max="50" />
          R$: {{ minPrice }} - R$: {{ maxPrice }}
        </div>

        <div>
          <select
            class="rounded border-1 border-purple-700 text-xl text-orange-500 placeholder:text-orange-300 active:border-purple-700"
            v-model="selectedTypeFilter"
          >
            <option value="">Selecione um gênero</option>
            <option v-for="type in uniqueTypes" :key="type" :value="type">{{ type }}</option>
          </select>
        </div>
      </div>
    </div>

    <ProductList :products="filteredProducts" />
  </main>
</template>

<style scoped>
</style>
