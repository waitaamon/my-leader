<template>
    <v-layout row wrap>
        <v-flex xs6 offset-xs3>
            <v-card class="grey lighten-4 elevation-0">
                <v-layout row v-if="errors.root">
                    <v-flex xs4></v-flex>
                    <v-flex xs6>
                        <v-alert error value="true">
                           {{ errors.root }}
                        </v-alert>
                    </v-flex>
                    <v-flex xs2></v-flex>
                </v-layout>

                <form @submit.prevent="submit">
                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Email Address</v-subheader>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field
                                    name="email"
                                    label="your email address"
                                    single-line
                                    append-icon="email"
                                    v-model="email"
                                    v-bind:rules="errors.email"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs2>

                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Password</v-subheader>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field
                                    name="password"
                                    label="your password"
                                    type="password"
                                    single-line
                                    append-icon="lock"
                                    v-model="password"
                                    v-bind:rules="errors.password"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs2>

                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>

                        </v-flex>
                        <v-flex xs6>
                            <v-btn type="submit" block primary >Login</v-btn>
                        </v-flex>

                    </v-layout>
                </form>

            </v-card>
        </v-flex>
    </v-layout>



</template>

<script>
    import { mapActions } from 'vuex'
    import localforage from "localforage";
    import { isEmpty } from 'lodash'

    export default {
        data(){

            return {

                email: null,
                password: null,
                errors: [],

            }
        },
        methods: {

            ...mapActions({
                login: 'auth/login'
            }),

            submit(){

                this.login({

                    payload: {

                        email: this.email,
                        password: this.password
                    },
                    context: this
                }).then(() => {


                    if(isEmpty(this.errors)){

                        localforage.getItem('intended').then(( name )=> {

                            if(isEmpty(name)){

                                this.$router.replace({ name: 'dashboard'})
                                return
                            }

                            this.$router.replace({ name: name})

                        })
                    }

                })
            }
        }
    }
</script>