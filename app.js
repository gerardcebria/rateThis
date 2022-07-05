import { VuetifyLoader } from "webpack-plugin-vuetify"

const routes = [
    {path: '/home', component: App},
    {path: '/ranking', component: Ranking}
]

const router = new VuetifyLoader({
    router
}).$mount('#app')