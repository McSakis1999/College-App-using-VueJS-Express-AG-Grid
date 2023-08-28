<template>
    <div class="mainContent">
      <div class="header"><h2>Students</h2></div>
      <grid 
      :studentData="this.studentData"
      >
      
      </grid>
    </div>
</template>


<script >
  import grid from '../components/dataTable.vue'
  import getAllStudents from '../services/getAllStudents';

  export default{
    components:{
      grid
    },
    data() {
      return {
        studentData: [],
      };
  }
  ,
  methods: {
    async fetchData() {
      let data = (await getAllStudents.getStudents()).data
      let result = [];
      data.forEach(entry => {
        result.push({"firstName":entry.firstName,"surname":entry.lastName,"address":entry.address,"phone":entry.phoneNumber,"email":entry.email})
      });
      this.studentData = Object.values(result).map(obj => obj);
      console.log(this.studentData)
    }
  }
  }
</script>

<style scoped>
    .container{
        background-color: #0B1731;
    }
    .mainContent{
        display: flex;
        flex-direction: column;
        gap:1rem;
        width:100%;
        height:100%;
        padding-left: 1rem;
  }
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

  @media (max-width: 800px){
    .mainContent{
      padding-left: 0;
      height: 100vh;
    }
    .header h2{
      font-size: 20px;
      margin: 0;
    }

  }
</style>