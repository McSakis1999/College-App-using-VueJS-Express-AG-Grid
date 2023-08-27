<script setup>
import { RouterLink, RouterView } from 'vue-router'
import sidebar from './components/sidebar.vue';
//#0B1731
</script>

<template>
  <div class="wrapper">
    <sidebar/>
    <RouterView />
  </div>
</template>

<style scoped>

  *,*::before,*::after{
    box-sizing: border-box;
  }
  .wrapper{
    display: flex;
    width:100vw;
    height: 100vh;
    padding:1rem;
    background-color: #fff;
  }
  .mainContent{
    display: flex;
    flex-direction: column;
    gap:1rem;
    width:100%;
    height:100%;
    padding-left: 1rem;
  }
</style>
