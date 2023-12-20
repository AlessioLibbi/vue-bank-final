<script>
export default {
  data() {
    return {
      dense: true,
      gracePeriod: null,
      value: true,
      creditLineCopy:  this.creditLine
    };
  },
  props:["creditLine"],
  computed: {
    userFullData() {
      return this.$store.state.userFullData;
    },

    
    calcDsoTotal() {
      return (
        parseInt(this.gracePeriod) + parseInt(this.creditLineCopy.estimatedDso)
      );
    },
    managementFeePercentage: {
      get() {
        return 0.15;
      },
      set(value) {
        this.creditLineCopy.managementFeePercentage = value + "%";
      },
    },
  },
};
</script>

<template>
  <section>
    <p>TABELLA CALCOLO</p>
    <div class="line"></div>
    <div class="row">
      <div class="col">
        <p>Importo</p>
        <p>{{ this.creditLineCopy.amountSum }}€</p>
      </div>
      <div class="col">
        <p>Divisa</p>
        <p>{{ this.creditLineCopy.currencyCode }}</p>
      </div>
      <div class="col">
        <p>DSO dichiarato</p>
        <p>{{ this.creditLineCopy.estimatedDso }}</p>
      </div>
      <div class="col">
        <p>Grace period</p>
        <q-input
          id="inpiut"
          type="number"
          rounded
          outlined
          :dense="dense"
          v-model="gracePeriod"
        />
      </div>
      <div class="col">
        <p>DSO totale</p>
        <p>
          {{
            this.gracePeriod ? this.calcDsoTotal : this.creditLineCopy.estimatedDso
          }}
        </p>
      </div>
    </div>
    <!-- ////////////////////////////////////////////// -->
    <div class="line"></div>
    <div class="row">
      <div class="col">
        <p>Codice SAE</p>
        <p>{{ userFullData.saeCode }}</p>
      </div>
      <div class="col">
        <p>Fatturato annuo</p>
        <p>{{ userFullData.annualRevenueAmount }}€</p>
      </div>
      <div class="col">
        <p>Dipendenti</p>
        <p>{{ userFullData.employeeCount }}</p>
      </div>
      <div class="col">
        <p>Esp.tot.mutui</p>
        <p>{{ userFullData.eadTotalAmount }}€</p>
      </div>
      <div class="col">
        <p>Esp.tot.factoring</p>
        <p>{{ userFullData.factoringTotalAmount }}€</p>
      </div>
      <div class="col">
        <p>RW</p>
        <p>{{ userFullData.rwPercentage }}%</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="row">
      <div class="col">
        <p>Morescore cliente</p>
        <p>{{ userFullData.assignorMoreScore }}</p>
      </div>
      <div class="col">
        <p>CoF</p>
        <p>{{ this.creditLineCopy.cofPercentage }}%</p>
      </div>
      <div class="col">
        <p>CoR</p>
        <p>{{ this.creditLineCopy.corPercentage }}%</p>
      </div>
      <div class="col">
        <p>Costo industriale</p>
        <p>{{ this.creditLineCopy.industrialCostPercentage }}%</p>
      </div>
      <div class="col">
        <p>Costo capitale</p>
        <p>{{ this.creditLineCopy.capitalCostPercentage }}%</p>
      </div>
    </div>
    <div class="calculation">
      <div class="calculation-input">
        <div class="calc-inp-text">
          <p class="title">Commissione</p>
          <p class="title">Commissione di Gestione</p>
        </div>
        <div class="calc-inp-text">
          <q-input
            type="number"
            rounded
            outlined
            :dense="dense"
            v-model="this.creditLineCopy.commissionPercentage"
          />
          <q-input
            type="number"
            rounded
            outlined
            :dense="dense"
            v-model="managementFeePercentage"
          />
        </div>
      </div>
    </div>
    <div class="calc-top">
      <div class="flex">
        <p>Percentuale prezzo target</p>
        <p>{{ this.creditLineCopy.targetPricePercentage }}%</p>
      </div>
      <div class="line"></div>
      <div class="flex">
        <p>Valore di aquisto</p>
        <p>{{ this.creditLineCopy.purchaseReceivableAmount }}€</p>
      </div>
      <div class="line"></div>
      <div class="flex">
        <p>Recupero spese valutazione debitore</p>
        <q-input
          type="number"
          rounded
          outlined
          :dense="dense"
          v-model="this.creditLineCopy.debtorRecoverCostUnitPrice"
        />
        <p>{{ this.creditLineCopy.debtorRecoverCost }}€</p>
      </div>
      <div class="line"></div>
      <div class="flex">
        <p>Totale competenze</p>
        <p>{{ this.creditLineCopy.bankFee }}€</p>
      </div>
      <div class="line"></div>
      <div class="flex">
        <p>Rendimento finanziario annuo lordo</p>
        <p class="red">{{ this.creditLineCopy.grossAnnualFinancialReturn }}%</p>
      </div>
      <div class="line"></div>
      <div class="toggle flex-norm">
        <div class="disabled">
          <p class="title">Pratica diretta</p>
          <div class="row-f">
            <span>No</span> <q-toggle v-model="value" color="green" disable />
            <span>Si</span>
          </div>
        </div>
        <div class="abled">
          <p class="title">Polizza Coface</p>
          <span>No</span> <q-toggle v-model="this.creditLineCopy.hasCofaceBill" /><span
            >Si</span
          >
        </div>
      </div>
    </div>
    <div class="calc-bot">
      <div class="flex-end">
        <p>Totale</p>
      </div>
      <div class="flex">
        <p>Numero debitori</p>
        <p>{{ this.creditLineCopy.debtorCount }}</p>
      </div>
      <div class="line"></div>
      <div class="flex">
        <p>Costo valutazione debitore</p>
        <q-input
          type="number"
          rounded
          outlined
          :dense="dense"
          v-model="this.creditLineCopy.debtorAssessmentCostUnitPrice"
        />
        <p>{{ this.creditLineCopy.debtorAssessmentCost }}€</p>
      </div>
      <div class="line"></div>
      <div class="flex">
        <p>Costo rete commerciale</p>
        <p>{{ this.creditLineCopy.saleCost }}€</p>
      </div>
      <div class="line"></div>
      <div class="flex">
        <p>Costo assicurazione coface</p>
        <q-input
          type="number"
          rounded
          outlined
          :dense="dense"
          v-model="this.creditLineCopy.cofaceCostPercentage"
        />
        <p>{{ this.creditLineCopy.cofaceCost }}€</p>
      </div>
      <div class="line"></div>
      <div class="flex">
        <p>Totale costi aquisition e incassi</p>
        <p>{{ this.creditLineCopy.finalAmount }}€</p>
      </div>
      <div class="button-group">
        <q-btn
          unelevated
          rounded
          color="red"
          style="text-transform: none , border-radius: 15px"
          label="ripristina"
        />
        <q-btn
          unelevated
          rounded
          color="green"
          style="text-transform: none , border-radius: 15px"
          disable
          label="Calcola"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.calc-inp-text {
  display: flex;
}
.flex {
  display: flex;
  justify-content: space-between;
  .red {
    color: red;
  }
}
.flex-norm {
  display: flex;

  .row-f {
    margin-right: 30px;
  }
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.button-group {
    text-align: center;
}
</style>
