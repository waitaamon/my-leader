<template>
    <!--<nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                &lt;!&ndash; Collapsed Hamburger &ndash;&gt;
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                &lt;!&ndash; Branding Image &ndash;&gt;
                <router-link :to="{ name: 'home'}" class="navbar-brand">Boilerplate</router-link>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                &lt;!&ndash; Left Side Of Navbar &ndash;&gt;
                <ul class="nav navbar-nav">
                    &nbsp;
                </ul>

                <ul class="nav navbar-nav navbar-right" v-if="!user.authenticated">
                    <li><router-link :to="{ name: 'login'}">Login</router-link></li>
                    <li><router-link :to="{ name: 'register'}">Register</router-link></li>
                </ul>



                &lt;!&ndash; Right Side Of Navbar &ndash;&gt;
                <ul class="nav navbar-nav navbar-right" v-if="user.authenticated">
                    &lt;!&ndash; Authentication Links &ndash;&gt;

                    <li><router-link :to="{ name: 'timeline'}">Timeline</router-link></li>

                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                           {{ user.data.name }}  <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="#" @click.prevent="signOut">
                                    Logout
                                </a>


                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav>-->

    <v-toolbar>
        <v-toolbar-title> <router-link :to="{ name: 'home'}">Know My Leader</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down"  v-if="!user.authenticated">
            <router-link :to="{ name: 'login'}" class="logout">Login</router-link> &nbsp;&nbsp;&nbsp;
            <router-link :to="{ name: 'register'}" class="logout">Register</router-link>

        </v-toolbar-items>
        <v-toolbar-items class="hidden-sm-and-down"  v-if="user.authenticated">
            <v-btn flat>{{ user.data.name }}</v-btn>
            <a href="#" @click.prevent="signOut" class="logout">
                Logout
            </a>

        </v-toolbar-items>
    </v-toolbar>

</template>

<script>

    import {mapGetters, mapActions} from 'vuex'

    export default{

        computed: mapGetters({
            user: 'auth/user',
        })
            ,
        methods: {
            ...mapActions({
                logout: 'auth/logout'
            }),

            signOut(){
                this.logout().then(() => {

                    this.$router.replace({ name: 'home'})
                })

            }
        }
    }
</script>

<style lang="scss" scoped>
    .toolbar a {
        text-decoration: none;
        color:#ccc;
    }
    .toolbar .logout{
        display: flex;

        max-width: 100%;
        margin-top: 5%;
        color: #29333c;
        padding: 6px 25px;
        border: 1px solid;
        margin-bottom: 15px;

        &:hover{
            border-color: #00acc1;
            color: #00acc1;
        }
    }
</style>

