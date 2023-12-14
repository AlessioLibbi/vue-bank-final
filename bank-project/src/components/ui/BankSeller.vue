<script>
export default {
  props: ["opt","asgnName","fiscalCode","vatCode","dsoSkip"],
};
</script>

<template>
  <section>
    <div class="jumbo">
      <h3>Calcolo pricing factoring</h3>
      <p>
        ID opportunità<span>{{ opt }}</span>
      </p>
    </div>
    <div class="line"></div>
    <div class="jumbo-down">
        <p>Ragione Sociale: <span>{{asgnName}}</span></p>
        <p>Codice Fiscale: <span>{{fiscalCode}}</span></p>
        <p>Partita Iva: <span>{{vatCode}}</span></p>
        <p>{{dsoSkip}}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.jumbo {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  height: 80px;
  align-items: center;
  h3 {
    font-size: 40px;
  }
  p {
    padding: 0;
    margin: 0;
    span {
      margin-left: 20px;
      padding: 10px 15px;
      background: #5b6e75;
      border-radius: 30px;
      color: white;
    }
  }
}
.jumbo-down {
   display: flex; 
   justify-content: space-around;
}

</style>
