<template>
    <div class="mainContent">
      <div class="header"><h2>Home</h2></div>
      <formComp/>
    </div>
</template>

<script setup>
    import formComp from '../components/form.vue';
</script>


<style scoped>
  .header{
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #6159b9;
    border: 1px solid #a2a6ff;
    color: #fff;
    opacity: .8;
    border-radius: 5px;
    padding:0.5rem;
  }
  .mainContent{
    display: flex;
    flex-direction: column;
    gap:1rem;
    width:100%;
    /* height:100%; */
    padding-left: 1rem;
  } 

  @media (max-width: 800px){
    .header h2{
      font-size: 20px;
      margin: 0;
    }
    .mainContent{
      padding-left: 0
    } 

  }
</style>