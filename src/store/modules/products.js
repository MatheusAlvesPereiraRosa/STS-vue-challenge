import { products } from '../data.js'

export default {
  state: {
    products: products,
    searchQuery: '',
    selectedTypeFilter: ''
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query
    },
    setSelectedTypeFilter(state, typeFilter) {
      state.selectedTypeFilter = typeFilter
    }
  },
  actions: {
    updateSearchQuery({ commit }, query) {
      commit('setSearchQuery', query)
    },
    updateSelectedTypeFilter({ commit }, typeFilter) {
      commit('setSelectedTypeFilter', typeFilter)
    }
  },
  getters: {
    filteredProducts(state) {
      let filteredProducts = state.products

      // Aplicar pesquisa por nome
      if (state.searchQuery) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
      }

      // Aplicar pesquisa por filtro de roupa
      if (state.selectedTypeFilter) {
        filteredProducts = filteredProducts.filter((product) =>
          product.type.toLowerCase().includes(state.selectedTypeFilter.toLowerCase())
        )
      }

      return filteredProducts
    },
    uniqueTypes(state) {
      const uniqueTypes = new Set()
      state.products.forEach((product) => {
        uniqueTypes.add(product.type)
      })
      return Array.from(uniqueTypes)
    }
  }
}
