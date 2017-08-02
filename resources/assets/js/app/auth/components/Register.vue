<template>
  <!--  <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Register</div>

                    <div class="panel-body">
                        <form class="form-horizontal" @submit.prevent="submit">

                            <div class="form-group" v-bind:class="{ 'has-error': errors.username }">
                                <label for="username" class="col-md-4 control-label">Username</label>
                                <div class="col-md-6">
                                    <input id="username" type="text" class="form-control" name="username"  autofocus v-model="username">

                                    <span class="help-block" v-if="errors.username">
                                        {{ errors.username[0] }}
                                    </span>
                                </div>

                            </div>

                            <div class="form-group" v-bind:class="{ 'has-error': errors.email }">
                                <label for="email" class="col-md-4 control-label">Email</label>
                                <div class="col-md-6">
                                    <input id="email" type="text" class="form-control" name="email"  v-model="email">
                                    <span class="help-block" v-if="errors.email">
                                        {{ errors.email[0] }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group" v-bind:class="{ 'has-error': errors.password }">
                                <label for="password" class="col-md-4 control-label">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password"  v-model="password">
                                    <span class="help-block" v-if="errors.password">
                                        {{ errors.password[0] }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>-->
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <v-card class="grey lighten-4 elevation-0">

                    <form @submit.prevent="submit">
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Full Name</v-subheader>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field
                                        name="name"
                                        label="your Full Name"
                                        single-line
                                        append-icon="person"
                                        v-model="name"
                                        v-bind:rules="errors.name"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                            </v-flex>
                        </v-layout>
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
                                <v-subheader>ID Number</v-subheader>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field
                                        name="idNumber"
                                        label="your ID Number"
                                        single-line
                                        append-icon="beenhere"
                                        v-model="idNumber"
                                        v-bind:rules="errors.idNumber"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Phone Number</v-subheader>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field
                                        name="phone"
                                        label="your Phone Number"
                                        single-line
                                        append-icon="phone"
                                        v-model="phone"
                                        v-bind:rules="errors.phone"
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
                                <v-btn type="submit" block primary >Register</v-btn>
                            </v-flex>

                        </v-layout>
                    </form>

                </v-card>
            </v-flex>
        </v-layout>

</template>

<script>
    import { mapActions } from 'vuex'
    import { isEmpty } from 'lodash'

    export default {
        data(){

            return {
                name: null,
                email: null,
                phone: null,
                idNumber: null,
                password: null,
                errors: []

            }
        },
        methods: {

            ...mapActions({
                register: 'auth/register'
            }),

            submit(){
                this.register({

                    payload: {

                        name: this.name,
                        email: this.email,
                        idNumber: this.idNumber,
                        phone: this.phone,
                        password: this.password
                    },

                    context: this
                }).then(() => {

                    if(isEmpty(this.errors)){

                        this.$router.replace({ name: 'dashboard'})
                    }
                    this.$router.replace({ name: 'dashboard'})

                })
            }
        }
    }
</script>