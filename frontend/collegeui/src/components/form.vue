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
            <p v-if="error">{{ error }}</p>
            </div>
            <section class="actionBtns">
                <button class="btn btn-primary" ref="submit" type="submit">Login</button>
            </section>
        </form>
        
        <teleport to="body">
            <div class="modal" v-if="isOpen">
                <modal
                    @close="isOpen = false"
                    :form-data="formData"
                    title="Hello"
                    msg="World"
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
            handleSubmitForm(e){
                if(this.formData.firstName != '' && this.formData.lastName != '' && this.formData.email != '' && this.formData.password != ''){
                    e.preventDefault();
                    this.submitForm();
                }
            },
            async submitForm(){
                await (AddStudent.addStudent(this.formData))
                this.isOpen = true;
                console.log(this.formData);
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
    border: 1px solid #838383;
    background-color: #9d9d9d;
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
.actionBtns{
    align-self: flex-end;
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