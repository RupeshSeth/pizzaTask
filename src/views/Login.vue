<template>
    <div class="OpsSignIn" style="height:100vh" >
        <div class="bg" ><v-img contain :src="bgImage" /></div>
     
        <v-layout align-center justify-center fill-height>
        <v-flex xs12 sm8 md4>
             <v-layout>
                <v-flex>
                    <v-img :src="require('@/assets/logo1.png')"></v-img>
                </v-flex>
            </v-layout>
            <v-card class="elevation-12">
            <!-- <v-toolbar dark color="#d84907">
                <v-toolbar-title>Operation's Sign-In</v-toolbar-title>
            </v-toolbar> -->
           
            <v-card-text>
                <v-form v-model="valid" ref="form">
                <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    id="emailId"
                    type="text"
                    :rules="emailRules"
                    v-model="emailId"
                ></v-text-field>
                <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="userPassword"
                    :rules="passwordRules"
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    @click:append="show1 = !show1"
                    v-model="password"
                ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="#d84907" @click="login">Login</v-btn>
            </v-card-actions>
            </v-card>
        </v-flex>
        </v-layout>
        </div>
    
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';
import * as Snackbar from 'node-snackbar';

@Component({})
export default class Login extends Vue {
    private emailId: string = '';
    private password: string = '';
    private show1: boolean = false;
    private valid: boolean = true;
    private emailRules = [
        (v: any) => !!v || 'Email is required',
        (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'
    ];
    private passwordRules = [
        (v: any) => !!v || 'Password is required'
        // (v: any) => /.+@.+/.test(v) || 'Password incorrect',
    ];
    private bgImage: any = require('@/assets/bg2.jpg');

    private mounted() {
        const login = window.localStorage.getItem('login');
        if (login === 'success') {
        this.$router.push({ name: 'Root.Dashboard' });
        } else {
        window.localStorage.clear();
        }
    }


    private login() {
        
    const ref = this.$refs.form as any;
    if (ref.validate()) {

        // We can call the rest API Here.
        if (this.emailId === 'admin@appinesspizza.com' && this.password === 'admin') {
            window.localStorage.setItem('login', 'success');
            window.localStorage.setItem('userEmailId', this.emailId);
            this.$router.push({name: 'Root.Dashboard'});
        } else {
            Snackbar.show({text: 'The username and password is incorrect. Please try again', backgroundColor: 'red', textColor: '#fff', actionTextColor: '#fff',pos: 'top-center'});
        }
    }   
    }
};
</script>

<style scoped>



</style>