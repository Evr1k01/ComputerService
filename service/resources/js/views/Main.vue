<template>
    <v-app-bar class="base__app-bar" flat>
        <v-row justify="center">
            <v-col cols="11">
                <v-row>
                    <v-col cols="3">
                        <v-row>
                            <v-img class="base__app-bar-logo align-self-center" :src="logo"></v-img>
                            <p class="base__app-bar-logo-title">Computer-<span class="base__app-bar-logo-span">Service</span></p>
                        </v-row>
                    </v-col>

                    <v-col cols="9">
                        <v-row justify="end">
                            <v-col cols="auto" align-self="center"><p><a class="base__app-bar-title" href="tel:+7 747 349 92 57">+7 747 349 92 57</a></p></v-col>
                            <v-col cols="auto" align-self="center"><p><a class="base__app-bar-title" href="mailto:maximu17@mail.ru">maximu17@mail.ru</a></p></v-col>
                            <v-col cols="auto" align-self="center"><v-btn color="#a12a4b" variant="outlined" @click="dialogs.registration = true; dialogs.login = false">Registrieren</v-btn></v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-app-bar>

    <v-main scrollable>
        <v-row justify="center">
            <v-col cols="12" md="11">
                <v-row>
                    <v-col cols="8">
                        <v-container class="d-flex base__container" fluid>
                            <v-row justify="center">
                                <v-col cols="10" align-self="center">
                                    <p class="base__title-one">Wir bieten optimale Wartung für bescheidene Preise an!</p>
                                    <v-btn rounded="lg" flat color="#e2be1d" class="base__btn-info" size="large" append-icon="mdi mdi-information-outline">
                                        Mehr erfahren
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>

                        <v-container class="d-flex base__container" fluid>
                            <v-row justify="center">
                                <v-col cols="10" align-self="center">
                                    <p class="base__title-one">Sie können sich anmelden, und alles selbst ausprobieren</p>
                                    <v-btn rounded="lg" flat color="#cfcfcf" class="base__btn-info" size="large" append-icon="mdi mdi-account-check-outline" @click="dialogs.login = true; dialogs.registration = false">
                                        Anmelden
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>

                    <v-col cols="4">
                        <div class="base__registration_container">
                            <v-card class="base__registration_container-card" v-show="dialogs.registration">
                                <v-card-title class="base__registration_container-card-title text-center">Registration</v-card-title>
                                <v-form
                                    ref="form"
                                    lazy-validation
                                >
                                    <!-- Name -->
                                    <v-text-field
                                        variant="underlined"
                                        placeholder="Bspw. Maxim"
                                        label="Name"
                                        clearable
                                        required
                                    />

                                    <!-- Email -->
                                    <v-text-field
                                        variant="underlined"
                                        placeholder="Bspw. xxx@gmail.com"
                                        label="Email"
                                        type="email"
                                        clearable
                                        required
                                    />

                                    <!-- Passwort -->
                                    <v-text-field
                                        variant="underlined"
                                        label="Passwort"
                                        type="password"
                                        clearable
                                        required
                                    />

                                    <!-- Wiederholung -->
                                    <v-text-field
                                        variant="underlined"
                                        label="Passwort (Wiederholung)"
                                        type="password"
                                        clearable
                                        required
                                    />

                                    <v-row justify="center">
                                        <v-col cols="12" md="10">
                                            <v-btn
                                                class="base__registration_container-card-btn"
                                                variant="outlined"
                                                size="x-large"
                                                color="#a12a4b"
                                            >
                                                Bestätigen
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card>

                            <!-- Einloggen -->
                            <v-card class="base__registration_container-card" v-show="dialogs.login">
                                <v-card-title class="base__registration_container-card-title text-center">Anmeldung</v-card-title>
                                <v-form
                                    ref="form"
                                    lazy-validation
                                >
                                    <!-- Email -->
                                    <v-text-field
                                        variant="underlined"
                                        placeholder="Bspw. xxx@gmail.com"
                                        label="Email"
                                        type="email"
                                        clearable
                                        required
                                    />

                                    <!-- Passwort -->
                                    <v-text-field
                                        variant="underlined"
                                        label="Passwort"
                                        type="password"
                                        clearable
                                        required
                                    />

                                    <v-row justify="center">
                                        <v-col cols="12" md="10">
                                            <v-btn
                                                class="base__registration_container-card-btn"
                                                variant="outlined"
                                                size="x-large"
                                                color="#a12a4b"
                                            >
                                                Einloggen
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card>

                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-main>

</template>

<script>
import logo from '../assets/pc.png'
export default {
    name: "Main",
    data:() => ({
        logo:logo,
        dialogs: {
            registration: true,
            login: false,
        }
    }),

}
</script>

<style scoped>

</style>
