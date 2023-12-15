<template>
  <div class="q-pa-md">
    <q-table  :rows="rows" :columns="columns" row-key="name" />
    
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    created() {
        this.rows =  this.$store.getters.debtorsList
    },
  setup() {
    return {
      columns: [
        {
          name: "Ragione Sociale",
          label: "Ragione Sociale",
          //   field: (row) => row.fat,

          field: function (row) {
            return row.name ;
          },
          sortable: true,
          align: "left",
        },
        { name: "C.F.",sortable: true, label: "C.F.", field: (row) => row.fiscalCode, align: "left" },
        {
            sortable: true,
          name: "Nazione",
          label: "Nazione",
          field: (row) => row.countryCode,
          align: "left",
        },
        {
            sortable: true,
          name: "Importo",
          label: "Importo",
          field: (row) => row.amount + "€",
          align: "left",
        },
        {
            sortable: true,
          name: "DSO",
          label: "DSO",
          field: (row) => row.calculatedDso ?? row.estimatedDso,
          align: "left",
        },
      ],
      rows: [],
    };
  },
});
</script>
