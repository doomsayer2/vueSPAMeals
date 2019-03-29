<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">
                Meal _PIECES_
            </div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">
                For your health
            </div>
            <div class="display-1 font-weight-bold white--text text-xs-center back-box">
                Finally find all the various meal chunks you need. Prepared meals just for you!
            </div>
            <v-btn fab class="mt-5 deep-orange accent-3">
                <v-icon large color="white">cloud_download</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
    .home-hero {
        background: url('../assets/background.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .back-box {
        background-color: #353535;
        padding: 4px;
        border: 1px solid #000;
        border-radius: 10px;
    }
</style>