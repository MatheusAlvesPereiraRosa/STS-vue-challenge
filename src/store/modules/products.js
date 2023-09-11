import { products } from '../data.js'

export default {
  state: {
    products: products,
    searchQuery: '',
    minPrice: 0,
    maxPrice: 0,
    selectedPriceRange: [0, 0],
    selectedTypeFilter: ''
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query
    },
    setSelectedPriceRange(state, priceRange) {
      state.selectedPriceRange = priceRange
    },
    setSelectedTypeFilter(state, typeFilter) {
      state.selectedTypeFilter = typeFilter

      console.log(state.selectedTypeFilter)
    }
  },
  actions: {
    updateSearchQuery({ commit }, query) {
      commit('setSearchQuery', query)
    },
    updateSelectedPriceRange({ commit }, priceRange) {
      commit('setSelectedPriceRange', priceRange)
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

        console.log(filteredProducts)
      }

      // Aplicar pesquisa por filtro de preço
      if (state.selectedPriceFilter) {
        const [minPrice, maxPrice] = state.selectedPriceRange
        filteredProducts = filteredProducts.filter((product) => {
          const price = product.price
          return price >= minPrice && price <= maxPrice
        })
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
        uniqueTypes.add(product.type) // Replace 'type' with the actual property name
      })
      return Array.from(uniqueTypes)
    }
  }
}
