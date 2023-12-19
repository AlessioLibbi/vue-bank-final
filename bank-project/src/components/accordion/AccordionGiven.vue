<script>
import AccordioTable from './fetures/AccordioTable.vue';
export default {
  props: ['creditLine'],
    components: {
        AccordioTable
    }
};
</script>

<template>
  <div class="q-pa-md" style="max-width: 100%">
    <q-list>
      <q-expansion-item
        group="somegroup2"
        label="ELENCO CEDUTI"
        default-opened
        header-class="text-DANGER"
      >
        <q-card>
          <q-card-section>
            
             <accordio-table :creditLine="creditLine"></accordio-table>
          </q-card-section>
         
        </q-card>
      </q-expansion-item>
      <q-separator />
    </q-list>
  </div>
</template>

<style lang="scss"></style>
