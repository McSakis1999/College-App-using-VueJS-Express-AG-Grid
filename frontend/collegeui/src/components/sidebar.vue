<template>
    <div class="sidebar">
        <img class="pageLogo" src="../assets/logoPg.webp">
        <h3 class="pageTitle">AICOLLEGE</h3>
        <div @click="this.$router.push('/')" class="sidebar-link"><img class="logo" src="../assets/user-plus-solid.svg"><p>Add Student</p></div>
        <div @click="this.$router.push('/students')" class="sidebar-link"><img class="logo" src="../assets/address-book-regular.svg"><p>Student List</p></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .sidebar{
        width:18%;
        max-width: 300px;
        height:100%;
        background-color: white;
        border-radius: 5px;
        padding:0.5rem;
        text-align:center;
        font-size: 20px;

        background-color: #9d9d9d;
        color: #fff;
        opacity: .8;
    }
    .sidebar-link:hover{
        cursor: pointer;
    }
    .pageLogo{
        height: 8rem;
        width:auto;
    }
    .pageTitle{
        width:calc(100% - 1rem);
        padding:0.5rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid rgba(82,82,89,.32);
    }
    .sidebar-link{
        padding:1rem 0;
    }
    .logo{
        height:1.2rem;
        width:auto;
        padding:0 1rem;
        color: #fff;
    }
    .sidebar-link p {
        margin: 0;
        display: inline-block;
    }
</style>