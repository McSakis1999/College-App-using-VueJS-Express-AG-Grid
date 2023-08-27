<template>
    <div>
        <img src="../assets/checkmark.png" alt="checkmark image">
        <h2>Successful Submission</h2>
        <p>Thank you for submitting the form. Here are the details:</p>

        <ul>
            <li><strong>First Name:</strong> {{ formData.firstName }}</li>
            <li><strong>Last Name:</strong> {{ formData.lastName }}</li>
            <li><strong>Email:</strong> {{ formData.email }}</li>
            <li><strong>Password:</strong> {{ formData.password }}</li>
        </ul>

        <button @click="$emit('close')">Close</button>
    </div>
</template>

<script setup>
    
    defineProps({
        title: String,
        msg: String,
        formData: Object
    })

    defineEmits("close")
</script>

<script>
</script>

<style scoped>

</style>