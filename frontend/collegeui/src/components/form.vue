<template>
    <div class="formContainer">
        <form class="loginForm" @submit="handleSubmitForm">
            <div>
            <div>
                <label for="username">Username:</label>
                <input type="text" class="form-control" placeholder="Username*" aria-label="Username" aria-describedby="basic-addon1" id="username" v-model="formData.firstName" required>
            </div>
            <div>
                <label for="Surname">Surname:</label>
                <input type="text" class="form-control" placeholder="Surname*" aria-label="Surname" aria-describedby="basic-addon1" id="Surname" v-model="formData.lastName" required>
            </div>
            <div>
                <label for="Address">Address:</label>
                <input type="text" class="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1" id="Address" v-model="formData.address">
            </div>
            <div>
                <label for="Mobile">Mobile Phone:</label>
                <input type="text" class="form-control" placeholder="Mobile Phone" aria-label="Mobile" aria-describedby="basic-addon1" id="Mobile" v-model="formData.phone">
            </div>
            <div>
                <label for="email">E-mail:</label>
                <input type="email" class="form-control" placeholder="E-mail*" aria-label="email" aria-describedby="basic-addon1" id="email" v-model="formData.email" required>
            </div>
            <div>
            <label for="password">Password:</label>
            <input type="password" class="form-control" placeholder="Password*" aria-label="Password" aria-describedby="basic-addon1" id="password" v-model="formData.password" required>
            </div>
            <p class="errorMsg" v-if="error">* {{ error }}</p>
            </div>
            <section class="actionBtns">
                <button @click ="response" class="formBtn btn btn-primary" ref="submit" type="submit">Submit</button>
            </section>
        </form>
        
        <teleport to="body">
            <div class="modal" v-if="isOpen">
                <modal
                    @close="modalClosed()" 
                    :form-data="formData"
                />
            </div>
        </teleport>
    </div>  
</template>

<script setup>
    import { ref } from 'vue'
    import modal from '../components/modal.vue'
   // const isOpen = ref(false);
</script>

<script>
    import AddStudent from '../services/addStudent'
    import getAllStudents from '../services/getAllStudents';
    export default {
        data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                address: '',
                phone: '',
                email: '',
                password:''
            },
            isOpen: false,
            error: ''
        };
        },
        methods: {
            response(){
                if(this.formData.firstName == '' || this.formData.lastName == '' || this.formData.email == '' || this.formData.password != ''){
                    this.error = "Please fill out all the required fields!"
                }
            },
            handleSubmitForm(e){
                if(this.formData.firstName != '' && this.formData.lastName != '' && this.formData.email != '' && this.formData.password != ''){
                    e.preventDefault();
                    this.submitForm(); // Submit form and store data to db
                    this.isOpen = true; // Open confirmation modal after form submition
                }
            },
            // Send data to the backend for storing
            async submitForm(){
                await (AddStudent.addStudent(this.formData))
            },
            // Retrieve fresh data when modal closes (new entry is stored) to localstorage
            async fetchData() {
                let data = (await getAllStudents.getStudents()).data
                let result = [];
                // format data in a way ag grid rowData undestands
                data.forEach(entry => {
                    result.push({"firstName":entry.firstName,"surname":entry.lastName,"address":entry.address,"phone":entry.phoneNumber,"email":entry.email})
                });
                let studentData = Object.values(result).map(obj => obj);
                localStorage.setItem('studentData', JSON.stringify(studentData));
            },
            //Reset form and retrieve fresh data
            modalClosed(){
                this.isOpen = false;
                this.formData = {
                    firstName: '',
                    lastName: '',
                    address: '',
                    phone: '',
                    email: '',
                    password:''
                }
                this.error = '';
                this.fetchData();
            }
        }
    };


</script>

<style scoped>
    .formContainer{
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
    .loginForm{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .errorMsg{
        padding:1rem 0.5rem;
    
    }
    .actionBtns{
        align-self: flex-end;
    }
    .formBtn{
        background-color: rgba(0,0,0,0);
        border-color: #fff;
        width:8rem;
        padding:0.5rem;
        margin-top: 1rem;
    }
    .formBtn:hover{
        background-color: #fff;
        color:#6159b9;
    }
    .modal{
        position: absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.1);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal > div{
        background-color: #fff;
        padding: 50px;
        border-radius: 10px;
    }
</style>