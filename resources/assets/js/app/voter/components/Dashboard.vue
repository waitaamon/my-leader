



<template>
    <v-layout row>
        <v-flex xs12 sm5 offset-sm1>
            <v-card elevation-2 class="pb-10">
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0 ">Your Details</h3>

                    </div>
                </v-card-title>
                <v-divider></v-divider>

                <v-card-text>

                    <v-layout row>
                        <v-flex xs2>
                            <v-subheader>Name : </v-subheader>
                        </v-flex>
                        <v-flex xs10>
                            <v-text-field
                                    :value="user.data.name ? user.data.name : 'no name'"
                                    disabled
                                    single-line
                            ></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs2>
                            <v-subheader>Email : </v-subheader>
                        </v-flex>
                        <v-flex xs10>
                            <v-text-field
                                    :value="user.data.email ? user.data.email : 'no email'"
                                    disabled
                                    single-line
                            ></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs2>
                            <v-subheader>Id Number  </v-subheader>
                        </v-flex>
                        <v-flex xs10>
                            <v-text-field
                                    :value="user.data.idNumber ? user.data.idNumber : 'no email...'"
                                    disabled
                                    single-line
                            ></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs2>
                            <v-subheader>Phone: </v-subheader>
                        </v-flex>
                        <v-flex xs10>
                            <v-text-field
                                    :value="user.data.phone ? user.data.phone : 'no name'"
                                    disabled
                                    single-line
                            ></v-text-field>
                        </v-flex>
                    </v-layout>

                </v-card-text>

            </v-card>
        </v-flex>
        <v-flex xs12 sm5>
            <v-card>

                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Your Voters details</h3>

                    </div>
                </v-card-title>
                <v-divider></v-divider>

                <v-card-text>
                    <div v-if="votersDetails">
                        <!--show voters details-->
                        <p>voters registration details</p>
                    </div>

                    <!-- if no voters details-->
                    <div v-if="!votersDetails">
                        <form @submit.prevent="voterDetails">
                            <v-layout row>
                                <v-flex xs3>
                                    <v-subheader>County: </v-subheader>
                                </v-flex>
                                <v-flex xs9>
                                    <v-text-field
                                            name="county"
                                            single-line
                                            v-model="county"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                                <v-flex xs3>
                                    <v-subheader>Constituency: </v-subheader>
                                </v-flex>
                                <v-flex xs9>
                                    <v-text-field
                                            name="county"
                                            single-line
                                            v-model="constituency"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                                <v-flex xs3>
                                    <v-subheader>Ward: </v-subheader>
                                </v-flex>
                                <v-flex xs9>
                                    <v-text-field
                                            name="county"
                                            single-line
                                            v-model="ward"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                                <v-flex xs3>
                                    <v-subheader>Polling station: </v-subheader>
                                </v-flex>
                                <v-flex xs9>
                                    <v-text-field
                                            name="county"
                                            single-line
                                            v-model="pollingStation"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                                <v-flex xs3>

                                </v-flex>
                                <v-flex xs9>
                                    <v-btn block primary dark type="submit">Submit</v-btn>
                                </v-flex>
                            </v-layout>

                        </form>
                    </div>

                </v-card-text>


            </v-card>
        </v-flex>
        <v-flex xs12 sm1></v-flex>
    </v-layout>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data(){
            return {

                votersDetails: false,

                userId: this.user.data.id,
                county: null,
                constituency: null,
                ward: null,
                pollingStation: null,
            }
        },
        methods: {
            ...mapActions({
                voterDetails: 'voter/voterDetail'
            }),

            voterDetails(){
                this.voterDetails({
                    payload: {
                        id: this.userId,
                        county: this.county,
                        constituency: this.constituency,
                        ward: this.ward,
                        pollingStation: this.pollingStation
                    },

                    context: this
                }).then(() =>{
                    console.log('am here')
                })
            }
        },
        computed: mapGetters({
            user: 'auth/user',
        })

    }
</script>

<style lang="scss" scoped>
    .personal-details{
        padding-top:0.8em;

        h6{
            padding-left:2em;
            padding-top:.6em;

            span{
                color: #fff;
            }
        }

    }

.text-center{
    text-align: center !important;
}

.pb-10{
        padding-bottom: 3.4em
}

</style>