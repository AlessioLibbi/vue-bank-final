<template>
  <div class="q-pa-md">
    <q-table
      :rows="rows"
      :pagination="initialPagination"
      :columns="columns"
      row-key="name"
    >
      <template  v-slot:pagination="scope">
       

              <q-btn
                icon="chevron_left"
                color="grey-8"
                round
                dense
                flat
                :disable="scope.isFirstPage"
                @click="scope.prevPage"
              >
              </q-btn>
              <span>Pagina {{ scope.pagination.page }} di {{scope.pagesNumber}}</span>
              <q-btn
                icon="chevron_right"
                color="grey-8"
                round
                dense
                flat
                :disable="scope.isLastPage"
                @click="scope.nextPage"
              >
              </q-btn>
        <div class="flex">
          <div class="flex">
            <p>
              <span>{{ rows.length }}</span
              >Risultati.
            </p>
            <p>
              Mostra:<span>{{ scope.pagination.rowsPerPage }}</span> risultati per pagina
            </p>
          </div>
          <div class="flex">
            {{ scope }}
          </div>
        </div>
      </template>
      <template #bottom-right>
        <p>ciao</p>
      </template>
    </q-table>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["crediLine"],
  created() {
    this.rows = this.$store.getters.debtorsList;
  },

  setup() {
    return {
   
      columns: [
        {
          name: "Ragione Sociale",
          label: "Ragione Sociale",
          //   field: (row) => row.fat,

          field: function (row) {
            return row.name;
          },
          sortable: true,
          align: "left",
        },
        {
          name: "C.F.",
          sortable: true,
          label: "C.F.",
          field: (row) => row.fiscalCode,
          align: "left",
        },
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

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>
