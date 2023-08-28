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
        display: flex;
        flex-direction: column;
        align-items: center;
        width:18%;
        max-width: 300px;
        height:100%;
        border-radius: 5px;
        padding:0.5rem;
        text-align:center;
        font-size: 20px;
        border: 1px solid #a2a6ff;
        background-color: #6159b9;
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
        border-bottom: 1px solid rgba(162, 166, 255, .32);
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
    .sidebar-link:hover{
        transform: scale(110%);
    }

    @media (max-width: 800px){
        .sidebar{
            height: auto;
            width:100%;
            max-width: 100%;
            padding: 0 0 0.25rem 0;
            margin-bottom: 1rem;
        }
        
        .pageTitle{
            width:100%;
            padding: 0 0 0.5rem 0;
            margin-bottom: 0.5rem;
        }
        .sidebar-link{
            padding:0.25rem 0;
        }
    }

     @media (max-width :1300px){
        .sidebar{
            font-size: 16px;
        }
        .siderbar * {
            font-size: inherit;
        }
        .sidebar h3{
            font-size: 20px;
        }
        .pageLogo{
            height: 6rem;
            width:auto;
        }
    }
</style>