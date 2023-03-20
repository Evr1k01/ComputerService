<template>
    <v-app-bar class="base__app-bar" flat>
        <v-row justify="center">
            <v-col cols="11">
                <v-row>

                    <v-col cols="2" md="4" lg="3">
                        <v-row>
                            <v-img class="base__app-bar-logo align-self-center" :src="logo"></v-img>
                            <p class="base__app-bar-logo-title">Computer-<span class="base__app-bar-logo-span">Service</span></p>
                        </v-row>
                    </v-col>

                    <v-col cols="10" md="8" lg="9">
                        <v-row justify="end">
                            <v-col cols="auto" align-self="center"><p><a class="base__app-bar-title" href="tel:+7 747 349 92 57">Anrufen</a></p></v-col>
                            <v-col cols="auto" align-self="center"><p><a class="base__app-bar-title" href="mailto:maximu17@mail.ru">@email</a></p></v-col>
                        </v-row>
                    </v-col>

                </v-row>
            </v-col>
        </v-row>
    </v-app-bar>

    <v-main>
        <v-row justify="center">
            <v-col cols="12" md="11">
                <v-card
                    color="#9fcdff"
                    class="home__user_card mb-3"
                >
                    <v-card-text>
                        <v-row justify="center">
                            <v-col cols="12" sm="8" lg="6">
                                <p class="home__user_card-title-user mb-4 mt-2">Ivanov Maxim Andreevich</p>
                                <p class="home__user_card-title-price mb-2 mt-4">Betrag: 10€</p>
                            </v-col>

                            <v-col cols="12" sm="4" lg="6" class="text-end" align-self="center">
                                <v-btn variant="flat" class="home__user_card-btn" append-icon="mdi-account-outline">Profile Anzeigen</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

            </v-col>
        </v-row>
    </v-main>

    <v-main>

    </v-main>
</template>

<script>
import logo from '../assets/pc.png'
export default {
    name: "Home",
    data:() => ({
        logo:logo,
    }),
}
</script>

<style scoped>

</style>
