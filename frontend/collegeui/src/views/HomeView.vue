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
    width: 100%;
    height: 10%;
    background-color: #9d9d9d;
    color: #fff;
    opacity: .8;
    border-radius: 5px;
    padding:0.5rem;
  }
</style>