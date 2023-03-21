<template>
    <v-app-bar class="base__app-bar" border flat>
        <v-row justify="center">
            <v-col cols="11">
                <v-row>

                    <v-col cols="2" md="4" lg="3">
                        <v-row>
                            <v-col cols="auto" class="align-self-center"><v-icon icon="mdi-apple-finder" size="x-large"></v-icon></v-col>
                            <v-col cols="auto"><p class="base__app-bar-logo-title">ComputerService</p></v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="10" md="8" lg="9" class="align-self-center">
                        <v-row justify="end">
                            <v-col cols="auto" align-self="center">
                                <v-btn color="#262728" @click="dialogs.login = false; dialogs.registration = true" variant="flat" class="base__btn-info" append-icon="mdi-arrow-right-circle">
                                    Registration
                                </v-btn>
                            </v-col>
                            <v-col cols="auto" align-self="center"><p><a class="base__app-bar-title" href="tel:+7 747 349 92 57">Anrufen</a></p></v-col>
                            <v-col cols="auto" align-self="center"><p><a class="base__app-bar-title" href="mailto:maximu17@mail.ru">@email</a></p></v-col>
                        </v-row>
                    </v-col>

                </v-row>
            </v-col>
        </v-row>
    </v-app-bar>

    <v-main scrollable class="base">
        <v-row justify="center">
            <v-col cols="11">
                <v-row>
                    <v-col cols="12" md="7" lg="6">
                        <p class="base__title-head mt-3">Unsere Bedingungen.</p>

                        <p class="base__title-text">Auf den ersten Blick scheint unsere
                            Werkstatt gewöhnlich zu sein, aber in Wirklichkeit
                            werden Sie positiv überrascht sein.
                        </p>

                        <v-btn
                            class="base__btn-info"
                            color="#262728"
                            @click="dialogs.registration = false; dialogs.login = true"
                        >
                            Sich Anmelden
                        </v-btn>

                    </v-col>


                    <v-col cols="12" md="5" lg="6">
                        <v-row justify="end">
                            <v-col cols="8">

                        <div class="base__registration_container mt-3">
                            <v-card class="base__registration_container-card" v-show="dialogs.registration">
                                <v-card-title class="base__registration_container-card-title text-center">Registration</v-card-title>
                                <v-form
                                    ref="form"
                                    lazy-validation
                                >
                                    <!-- Name -->
                                    <v-text-field
                                        class="base__registration_container-card-input"
                                        prepend-inner-icon="mdi-account-box-outline"
                                        variant="outlined"
                                        placeholder="Bspw. Maxim"
                                        label="Name"
                                        clearable
                                        required
                                    />

                                    <!-- Email -->
                                    <v-text-field
                                        variant="outlined"
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
                                        variant="outlined"
                                        label="Passwort"
                                        type="password"
                                        clearable
                                        required
                                    />

                                    <!-- Wiederholung -->
                                    <v-text-field
                                        prepend-inner-icon="mdi-lock-outline"
                                        variant="outlined"
                                        label="Passwort (Wiederholung)"
                                        type="password"
                                        clearable
                                        required
                                    />

                                    <v-row justify="center">
                                        <v-col cols="12" md="10">
                                            <v-btn
                                                class="base__registration_container-card-btn"
                                                variant="flat"
                                                size="x-large"
                                                color="#ffcd21"
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
                                                variant="flat"
                                                size="x-large"
                                                color="#ffcd21"
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
