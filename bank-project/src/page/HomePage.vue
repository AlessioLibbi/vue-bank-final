<script>
import AccordionSec from "./AccordionSec.vue";
import BankSeller from "../components/ui/BankSeller.vue";

export default {
  components: {
    BankSeller,
    AccordionSec,
  },
  computed: {
    userFullData() {
      return this.$store.state.userFullData;
    },
  },
  methods: {
    callUserData() {
      this.$store.dispatch("callUserData");
    },
  },
  created(){
    this.callUserData();
  }
};
</script>

<template>
  <section>
    
    <bank-seller
      :fiscalCode="userFullData.assignorFiscalCode"
      :asgnName="userFullData.assignorName"
      :opt="userFullData.opportunityId"
      :vatCode="userFullData.assignorVatCode"
      :dsoSkip="userFullData.dsoSkipReason"
    ></bank-seller>
    <accordion-sec>
        
    </accordion-sec>
  </section>
</template>

<style scoped lang="scss"></style>
