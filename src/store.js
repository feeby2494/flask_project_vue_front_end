import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    cart: [],
    products: [
      {
        name: "Corolla 98-02 Manual CV Axel (Passender Side)",
        id: 1,
        price: 65,
        images: [
          'corollaCVPass_01.jpg',
          'corollaCVPass_02.jpg',
          'corollaCVPass_03.jpg'
        ],
        affilate_link: ""
      },
      {
        name: "Corolla 98-02 1zzfe Engine Cover",
        id: 2,
        price: 35,
        images: [
          'corolla1zzEngCov_01.jpg',
          'corolla1zzEngCov_02.jpg',
          'corolla1zzEngCov_03.jpg'
        ]
      },
      {
        name: "Civic 06-11 R18 Alternator",
        id: 3,
        price: 65,
        images: [
          'civicR18Alt_01.jpg',
          'civicR18Alt_02.jpg',
          'civicR18Alt_03.jpg',
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0]
    },
    cart: (state) => (id) => {
      return state.cart.filter(p => p.id === Number(id))[0]
    },
  }
});
