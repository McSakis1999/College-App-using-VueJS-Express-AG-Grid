<template>
    <div class="gridContainer">
    <div class="ag-theme-alpine">
      <ag-grid-vue 
      :gridOptions="gridOptions" 
      :pagination="true"
      :paginationAutoPageSize="true"
      
      class="ag-theme-alpine">
    
      </ag-grid-vue>
    </div>
</div>
  </template>
  
  <script>
  import { AgGridVue } from 'ag-grid-vue3';
  import "../../node_modules/ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
  import "../../node_modules/ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
  
  export default {
    components: {
      AgGridVue,
    },
    data() {
      return {
        gridOptions: {
          rowData:[],
          columnDefs: [
            { field: 'firstName', headerName: 'First Name',resizable:true,filter:true },
            { field: 'surname', headerName: 'Surname',resizable:true,filter:true },
            { field: 'address', headerName: 'Address',resizable:true,filter:true },
            { field: 'phone', headerName: 'Mobile Phone',resizable:true,filter:true },
            { field: 'email', headerName: 'Email',resizable:true,filter:true },
          ],
        },
      };
    },
    // Fill the table with data stored in localstorage
    created(){
      const storedData = localStorage.getItem('studentData');
      if(storedData){
        this.gridOptions.rowData = JSON.parse(storedData)
      }
    }
  };
  </script>
  
    <style scoped>
        .gridContainer{
            height: 100%;
            width:100%;
            padding: 0.5rem;
            border-radius: 5px;
            border: 1px solid #a2a6ff;
            background-color: #6159b9;
            color: #fff;
            opacity: .8;
            position: relative; 
        }

        .ag-theme-alpine{
            width:100%;
            height:100%;
        }

        .ag-theme-alpine {
          --ag-foreground-color: #fff;
          --ag-background-color: rgb(0, 0, 0,0);
          --ag-header-foreground-color: #fff;
          --ag-header-background-color: rgb(0, 0, 0,.2);
          --ag-odd-row-background-color: rgb(0, 0, 0, 0.08);
          --ag-secondary-foreground-color: #fff;
          --ag-header-column-resize-handle-color: #fff;
          --ag-alpine-active-color:rgba(255,255,255,0.7);
          --ag-font-size: 15px;
        }
        .ag-paging-button {
          color: #fff!important;
        }
        
    </style>