<template>
<div class="container d-flex align-items-center justify-content-center">
    <div class="row">
        <div class="col-xs-12 d-flex justify-content-center">
            <form>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-3 col-form-label">Email</label>
                    <div class="col-9">
                        <input type="email" v-model="email" class="form-control" id="inputEmail3">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-3 col-form-label">Password</label>
                    <div class="col-9">
                        <input type="password" v-model="password" class="form-control" id="inputPassword3">
                    </div>
                </div>
                <button class="btn btn-primary btn-md float-right log-btn ladda-button"  data-style="expand-right" @click.prevent="logInUser()">Login</button>
            </form>
        </div>
    </div>
</div>
</template>

<style scoped>
    form{
        width: 100%;
    }

    .container{
        height: 80vh;
    }

    .row > .justify-content-center{
        width: 800px;
    }
</style>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            signedIn: false,
            email: '',
            password: '',
            token: ''
        }
    },
    methods:{
        logInUser(){
            axios.post('http://loyal_api.leackstat.info/api/v1/login', {
                email: this.email,
                password: this.password
            })
            .then((response) => {
     
                    this.$toast.success(response.data.message, "Welcome",{
                            timeout: 6000,
                            position: 'bottomRight'
                    });
                   
                    this.setValues(response);
                     
            })
            .catch((error) => {
               if(error.response){
                  
                    this.$toast.warning(error.response.data.message, "Invalid credentials",{
                         timeout: 6000,
                         position: 'bottomRight'
                     });
                  
               }
            });
        },
        setValues(response){

                this.email = ' ';
                this.password = ' ';
                this.signedIn = true;
                this.$store.dispatch('settingTokenAction', response.data.data.token);
                this.$store.dispatch('settingNameAction', response.data.data.name);
                this.$store.dispatch('settingSignedInAction', this.signedIn);
                return  this.$router.push({name: 'welcome'});
        }
    }
}
</script>