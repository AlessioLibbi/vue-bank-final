import { createStore } from "vuex";

const store = createStore({
  modules: {},
  state() {
    return {
      userFullData: {

      },
      toCalcData: {
      //   {
      //     sessionId: string; // Identificativo della sessione
      //     creditLineId: string // Identificativo della linea di credito
      //     gracePeriod: number // Grace Period DSO
      //     commissionPercentage: number // Commissione
      //     managementFeePercentage?: number | null // Commissioni di gestione
      //     interestPercentage?: number | null // Interessi
      //     hasCofaceBill?: boolean | null// Indica se è presente una polizza Coface
      //     debtorRecoverCostUnitPrice: number // Prezzo unitario recupero spese valutazione debitori
      //     debtorAssessmentCostUnitPrice: number // Costo unitario valutazione debitori
      //     saleCostWithoutRecoursePercentage?: number | null // Percentuale costo rete commerciale
      //     saleCostWithRecoursePercentage?: number | null // Percentuale costo rete commerciale
      //     cofaceCostPercentage?: number | null // Percentuale costo assicurazione coface
      // }
      }


    };
  },
  mutations: {
    setUserData(state, getUserData) {
      state.userFullData = getUserData;
    },
    updateData(state, newData) {
      state.toCalcData = newData
    }
  },
  getters: {
    creditLines(state){
      // DA MODIFICARE FILTRANDO PER ID BABBO DI CEPPA
      return state.userFullData.creditLines
    },
    // debtorsList(state,getters){
    //   // DA MODIFICARE FILTRANDO PER ID BABBO DI CEPPA
    // //  const deb1 =  getters.creditLines[0]['debtors']
    // //  const deb2 = getters.creditLines[1]['debtors']
    // //  Array.prototype.push.apply(deb1,deb2);
    // //  return deb1

    // }
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
        .then((response) => {JSON.stringify(response)
          context.commit("setUserData", response);
        })

    },
  },
});
export default store;
