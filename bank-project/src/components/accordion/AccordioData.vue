<script>
export default {
    props: ['creditLine'],

}
</script>


<template>
   <div class="row">
    
    <div class="col">
        <p>ID linea di credito</p>
        <p>{{creditLine.id}}</p>
    </div>
    <div class="col">
        <p>Forma Tecnica</p>
        <p>{{creditLine.type}}</p>
    </div>
    <div class="col">
        <p>Tipo debitore</p>
        <p>{{creditLine.debtorType}}</p>
    </div>
    <div class="col">
        <p>Importo</p>
        <p>{{creditLine.amountSum}}€</p>
    </div>
    <div class="col">
        <p>Crediti acquistabili</p>
        <p>{{creditLine.partialWithoutRecoursePercentage}}%</p>
    </div> 
   </div>
</template>


<style scoped lang="scss">

</style>