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

<style>

  *,*::before,*::after{
    box-sizing: border-box;
  }
  .wrapper{
    display: flex;
    width:100vw;
    height: 100vh;
    padding:1rem;
    background-color: #8e93d6;
  }

  @media (max-width: 800px){
    .wrapper{
      flex-direction: column;
      height: auto;
      font-size: 16px;
    }
    
  }

  @media (max-width: 1300px){
    .wrapper {
      width: 100%;
      font-size: 18px;
    }
    .wrapper * {
      font-size: inherit;
    }
  }
</style>
