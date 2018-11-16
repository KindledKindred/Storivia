
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
require('./bootstrap')

window.Vue = require('vue')


//routes定義
import FrontView from './components/Templates/FrontView.vue'
import LoginModal from './components/Templates/LoginModal.vue'
import WorkspaceView from './components/Templates/WorkspaceView.vue'
import ActionView from './components/Templates/ActionView.vue'
import CharacterView from './components/Templates/CharacterView.vue'
import WorldView from './components/Templates/WorldView.vue'
import ActionModal from './components/Templates/ActionModal.vue'
import CharacterModal from './components/Templates/CharacterModal.vue'
import WorldModal from './components/Templates/WorldModal.vue'

Vue.use(VueRouter)
const router = new VueRouter ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: FrontView
        },
        {
            path: '/login',
            component: LoginModal
        },
        {
            path: '/workspace',
            component: WorkspaceView,
            meta: { requiresAuth: true }
        },
        {
            path: '/action',
            component: ActionView,
            meta: { requiresAuth: true }
        },
        {
            path: '/character',
            component: CharacterView,
            meta: { requiresAuth: true }
        },
        {
            path: '/world',
            component: WorldView,
            meta: { requiresAuth: true }
        },
        {
            path: '/action-detail',
            component: ActionModal,
            meta: { requiresAuth: true }
        },
        {
            path: '/character-detail',
            component: CharacterModal,
            meta: { requiresAuth: true }
        },
        {
            path: '/world-detail',
            component: WorldModal,
            meta: { requiresAuth: true }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

//store定義
/*
Vue.use(Vuex)
const state = {
    auth: {
        token: null,
        userId: null
    }
    //以降にVuex.storeコンストラクタのstoreオプションの初期化を記述
}
const store = new Vuex.Store ({
    state,
    getters,
    actions,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
})
*/

export default new Vue({
    router,
    //store,
    el: '#app'
})
