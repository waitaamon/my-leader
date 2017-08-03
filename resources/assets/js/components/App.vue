<template>
    <v-app>
        <navigation></navigation>
        <main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </main>
        <v-footer class="pa-3">
            <v-spacer></v-spacer>
                <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>
