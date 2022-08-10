import { createApp } from 'vue'
import App from './App.vue'
import './assets/sass/main.scss'
import VueRouter from "vue-router";

import MainMenu from './components/MainMenu.vue'
import Board from './components/RicochetBoard.vue'

const router = new VueRouter({
    mode: "history",routes: [
    {path: '/', component: MainMenu},
    {path: '/board', component: Board}
]})


createApp({
    router,
    el: "#app",
    components: { App }
  });
