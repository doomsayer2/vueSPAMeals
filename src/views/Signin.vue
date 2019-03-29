<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue-grey darken-4">
                        <v-toolbar-title>Login Form</v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field prepend-icon="person" name="email" label="Email" type="email"
                                v-model="email" :rules="emailRules" required></v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"
                                required v-model="password" :rules="passwordRules"></v-text-field>
                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-grey darken-4" dark :disabled="!valid" @click="submit">Join</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name : 'SignIn',
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'An E-mail adress is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid (contain @)'
            ],
            passwordRules: [
                v => !!v || 'A Password is required'
            ]
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userLogin', {
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
};
</script>

<style scoped>
</style>