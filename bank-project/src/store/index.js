import { createStore } from "vuex";

const store = createStore({
  modules: {},
  state() {
    return {
      userFullData: {},
      toCalcData: {

      },
    };
  },
  mutations: {
    setUserData(state, getUserData) {
      state.userFullData = getUserData;
     
    },
    updateData(state, newData) {
      state.toCalcData = newData;
    },
  },
  getters: {
    creditLines(state) {
      // DA MODIFICARE FILTRANDO PER ID BABBO DI CEPPA
      return state.userFullData.creditLines;
    },
  },
  actions: {
    callUserData(context) {
      const url = `https://dev-api-pricing.bancaprogetto.it/sessions/6376b2f2-3aaf-472a-83f2-8dbc2e4b2215`;
      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          JSON.stringify(response);
          context.commit("setUserData", response);
         
        });
    },
  },
});
export default store;
