<script>
export default {
  data() {
    return {
      dense: true,
      gracePeriod: null,
      value: true,

      creditLineCopy: this.creditLine,
      changingData: {
        sessionId: "",
        gracePeriod: "",
        commissionPercentage: "",
        managementFeePercentage: "",
        interestPercentage: "",
        hasCofaceBill: "",
        debtorRecoverCostUnitPrice: "",
        debtorAssessmentCostUnitPrice: "",
        saleCostWithoutRecoursePercentage: "",
        saleCostWithRecoursePercentage: "",
        cofaceCostPercentage: "",
      },
    };
  },
  props: ["creditLine"],
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
        console.log(this.creditLineCopy.managementFeePercentage);
        return (this.creditLineCopy.managementFeePercentage = value + "%");
      },
    },
  },
  methods: {
    saveData() {
      this.changingData.sessionId = this.userFullData.id;
      this.changingData.creditLineId = this.creditLineCopy.id;
      this.changingData.gracePeriod = this.creditLineCopy.gracePeriod;
      this.changingData.commissionPercentage = parseInt(
        this.creditLineCopy.commissionPercentage
      );
      this.changingData.managementFeePercentage = parseInt(
        this.creditLineCopy.managementFeePercentage
      );
      this.changingData.interestPercentage = parseInt(
        this.creditLineCopy.interestPercentage
      );
      this.changingData.hasCofaceBill = this.creditLineCopy.hasCofaceBill;
      this.changingData.debtorRecoverCostUnitPrice = parseInt(
        this.creditLineCopy.debtorRecoverCostUnitPrice
      );
      this.changingData.debtorAssessmentCostUnitPrice = parseInt(
        this.creditLineCopy.debtorAssessmentCostUnitPrice
      );
      this.changingData.saleCostWithoutRecoursePercentage = parseInt(
        this.creditLineCopy.saleCostWithoutRecoursePercentage
      );
      this.changingData.saleCostWithRecoursePercentage = parseInt(
        this.creditLineCopy.saleCostWithRecoursePercentage
      );
      this.changingData.cofaceCostPercentage = parseInt(
        this.creditLineCopy.cofaceCostPercentage
      );

      const url =
        "https://dev-api-pricing.bancaprogetto.it/pricing-first-step/";
      fetch(url, {
        method: "POST",

        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.changingData),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.creditLineCopy.incomeInterestAmount =
            response.incomeInterestAmount;
          this.changingData.incomeInterestAmount =
            response.incomeInterestAmount;

          this.creditLineCopy.commissionAmount = response.commissionAmount;
          this.changingData.commissionAmount = response.commissionAmount;

          this.creditLineCopy.interestAmount = response.interestAmount;
          this.changingData.interestAmount = response.interestAmount;

          this.creditLineCopy.targetPricePercentage =
            response.targetPricePercentage;
          this.changingData.targetPricePercentage =
            response.targetPricePercentage;

          this.creditLineCopy.purchaseReceivableAmount =
            response.purchaseReceivableAmount;
          this.changingData.purchaseReceivableAmount =
            response.purchaseReceivableAmount;

          this.creditLineCopy.bankFee = response.bankFee;
          this.changingData.bankFee = response.bankFee;

          this.creditLineCopy.grossRevenueAmount = response.grossRevenueAmount;
          this.changingData.grossRevenueAmount = response.grossRevenueAmount;

          this.creditLineCopy.grossAnnualFinancialReturn =
            response.grossAnnualFinancialReturn;
          this.changingData.grossAnnualFinancialReturn =
            response.grossAnnualFinancialReturn;

          this.creditLineCopy.isGrossAnnualFinancialReturnValid =
            response.isGrossAnnualFinancialReturnValid;
          this.changingData.isGrossAnnualFinancialReturnValid =
            response.isGrossAnnualFinancialReturnValid;

          this.creditLineCopy.saleCostWithRecourseAmount =
            response.saleCostWithRecourseAmount;
          this.changingData.saleCostWithRecourseAmount =
            response.saleCostWithRecourseAmount;

          this.creditLineCopy.saleCostWithoutRecourseAmount =
            response.saleCostWithoutRecourseAmount;
          this.changingData.saleCostWithoutRecourseAmount =
            response.saleCostWithoutRecourseAmount;

          this.creditLineCopy.saleCost = response.saleCost;
          this.changingData.saleCost = response.saleCost;

          this.creditLineCopy.cofaceCost = response.cofaceCost;
          this.changingData.cofaceCost = response.cofaceCost;

          this.creditLineCopy.cofPercentage = response.cofPercentage;
          this.changingData.cofPercentage = response.cofPercentage;

          this.creditLineCopy.industrialCostPercentage =
            response.industrialCostPercentage;
          this.changingData.industrialCostPercentage =
            response.industrialCostPercentage;

          this.creditLineCopy.capitalCostPercentage =
            response.capitalCostPercentage;
          this.changingData.capitalCostPercentage =
            response.capitalCostPercentage;

          this.$store.commit("updateData", this.changingData);
        });
      console.log(JSON.stringify(this.changingData));
    },
    reset() {
      window.location.reload();
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
          debounce="500"
          class="my-input-medium"
          id="inpiut"
          type="number"
          rounded
          outlined
          :dense="dense"
          v-model="gracePeriod"
          @change="saveData"
        />
      </div>
      <div class="col">
        <p>DSO totale</p>
        <p>
          {{
            this.gracePeriod
              ? this.calcDsoTotal
              : this.creditLineCopy.estimatedDso
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
            debounce="500"
            class="my-input"
            type="number"
            rounded
            outlined
            :dense="dense"
            v-model="this.creditLineCopy.commissionPercentage"
            @change="saveData"
          />
          <q-input
            debounce="500"
            class="my-input"
            type="number"
            rounded
            outlined
            :dense="dense"
            v-model="managementFeePercentage"
            @change="saveData"
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
          debounce="500"
          class="my-input-medium"
          type="number"
          rounded
          outlined
          :dense="dense"
          v-model="this.creditLineCopy.debtorRecoverCostUnitPrice"
          @change="saveData"
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
          <span>No</span>
          <q-toggle v-model="this.creditLineCopy.hasCofaceBill" /><span
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
          class="my-input-medium"
          type="number"
          rounded
          outlined
          :dense="dense"
          v-model="this.creditLineCopy.debtorAssessmentCostUnitPrice"
          @change="saveData"
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
          debounce="500"
          class="my-input-medium"
          type="number"
          rounded
          outlined
          :dense="dense"
          v-model="this.creditLineCopy.cofaceCostPercentage"
          @change="saveData"
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
          debounce="500"
          @click="reset"
          unelevated
          rounded
          color="red"
          style="text-transform: none , border-radius: 15px"
          label="ripristina"
        />
        <q-btn
          debounce="500"
          unelevated
          rounded
          color="green"
          style="text-transform: none , border-radius: 15px"
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
