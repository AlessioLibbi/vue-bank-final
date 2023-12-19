<script>
import AccordioData from "../components/accordion/AccordioData.vue";
import AccordionGiven from "../components/accordion/AccordionGiven.vue";
import AccordioCalc from '../components/accordion/fetures/AccordioCalc.vue';

export default {
  components: {
    AccordioData,
    AccordionGiven,
    AccordioCalc
  },
  props: ['creditLine']
};
</script>

<template>
  <div class="q-pa-md" style="max-width: 100%">
    <q-list>
      <q-expansion-item
        group="somegroup"
        label="LINEA DI CREDITO - PRO SOLUTO PARZIALE - PRIVATO"
        default-opened
        header-class="text-DANGER"
      >
        <q-card>
          <q-card-section>
            <accordio-data :creditLine="creditLine"></accordio-data>
            <accordion-given :creditLine="creditLine"></accordion-given>
            <accordio-calc :creditLine="creditLine"></accordio-calc>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />
    </q-list>
  </div>
</template>
