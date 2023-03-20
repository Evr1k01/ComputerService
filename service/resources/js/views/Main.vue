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

    <v-main scrollable>
        <v-row justify="center">
            <v-col cols="11">
                <v-row>
                    <v-col cols="12" md="7" lg="8">

                        <v-card class="base__container" color="#eec71d" flat>
                            <v-row justify="center">
                                <v-col cols="12" sm="10" align-self="center">
                                    <p class="base__title-one">Wir bieten optimale Wartung für bescheidene Preise an!</p>
                                    <v-row justify="center" class="justify-md-start mt-3">
                                        <v-col cols="10" sm="8" md="6">
                                            <v-btn flat color="#879192" class="base__btn-info" size="large" append-icon="mdi mdi-information-outline">
                                                Mehr erfahren
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>

                        <v-card class="base__container" color="#9fcdff" flat>
                            <v-row justify="center">
                                <v-col cols="12" sm="10" align-self="center">
                                    <p class="base__title-one">Sie können sich anmelden, und alles selbst ausprobieren</p>

                                    <v-row justify="center" class="mt-3">
                                        <v-col cols="10" sm="6" align-self="center" class="text-md-start">
                                            <v-btn flat color="success" variant="flat" class="base__btn-info" size="large" append-icon="mdi mdi-account-check-outline" @click="dialogs.login = true; dialogs.registration = false">
                                                Anmelden
                                            </v-btn>
                                        </v-col>

                                        <v-col cols="10"  sm="6" align-self="center"  class="text-md-end">
                                            <v-btn flat color="#a12a4b" variant="flat" class="base__btn-info" size="large" append-icon="mdi mdi-account-alert-outline" @click="dialogs.registration = true; dialogs.login = false">
                                                Registrieren
                                            </v-btn>
                                        </v-col>
                                    </v-row>

                                </v-col>
                            </v-row>
                        </v-card>

                        <v-card class="base__container" color="#6cd759" flat>
                            <v-row justify="center">
                                <v-col cols="12" sm="10" align-self="center">
                                    <p class="base__title-one">Falls Sie genug Zeit haben, könnten Sie unsere Beurteilungen lesen</p>
                                    <v-row justify="center" class="justify-md-start mt-3">
                                        <v-col cols="10" md="6">
                                            <v-btn flat color="#879192" class="base__btn-info" size="large" append-icon="mdi mdi-information-outline">
                                                Lesen
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>


                    <v-col cols="12" md="5" lg="4">
                        <div class="base__registration_container">
                            <v-card class="base__registration_container-card" v-show="dialogs.registration">
                                <v-card-title class="base__registration_container-card-title text-center">Registration</v-card-title>
                                <v-form
                                    ref="form"
                                    lazy-validation
                                >
                                    <!-- Name -->
                                    <v-text-field
                                        prepend-inner-icon="mdi-account-box-outline"
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
                                        prepend-inner-icon="mdi-email-outline"
                                        label="Email"
                                        type="email"
                                        clearable
                                        required
                                    />

                                    <!-- Passwort -->
                                    <v-text-field
                                        prepend-inner-icon="mdi-lock-outline"
                                        variant="underlined"
                                        label="Passwort"
                                        type="password"
                                        clearable
                                        required
                                    />

                                    <!-- Wiederholung -->
                                    <v-text-field
                                        prepend-inner-icon="mdi-lock-outline"
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
                                        prepend-inner-icon="mdi-email-outline"
                                        variant="underlined"
                                        placeholder="Bspw. xxx@gmail.com"
                                        label="Email"
                                        type="email"
                                        clearable
                                        required
                                    />

                                    <!-- Passwort -->
                                    <v-text-field
                                        prepend-inner-icon="mdi-lock-outline"
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
