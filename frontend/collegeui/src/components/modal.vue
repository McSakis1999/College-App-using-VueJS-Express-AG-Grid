<template>
    <div class="modalWrapper">
        <img src="../assets/checkmark.png" alt="checkmark image">
        <h2>Successful Submission</h2>
        <p>Thank you for submitting the form. Here are the details:</p>

        <ul>
            <li><strong>First Name:</strong> {{ formData.firstName }}</li>
            <li><strong>Surname:</strong> {{ formData.lastName }}</li>
            <li><strong>Mobile Phone:</strong> {{ formData.phone }}</li>
            <li><strong>Email:</strong> {{ formData.email }}</li>
            <li><strong>Password:</strong> {{ formData.password }}</li>
        </ul>

        <button class="btn btn-primary" @click="$emit('close')">Close</button>
    </div>
</template>

<script setup>
    
    defineProps({
        formData: Object
    })
    // send an emit when close button is pressed so form component knows when modals is closed
    defineEmits("close")
</script>

<script>
</script>

<style scoped>
    .modalWrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem!important;
    }
    h2{
        align-self: center;
    }
    img{
        align-self: center;
        width:200px;
        height: auto;
    }
    button{
        align-self: center;
        width:30%;
        border: 1px solid red;
        background-color: rgba(0,0,0,0);
        color:red;
    }
    button:hover{
        background-color: red;
        color:white;
    }

    @media (max-width: 800px){
        .modalWrapper{
            padding: 1rem!important;
        }
    }
</style>