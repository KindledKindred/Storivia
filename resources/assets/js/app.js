
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
//import VuexORM from '@vuex-orm/core'

require('./bootstrap')

window.Vue = require('vue')

//route読み込み
import FrontView from './components/Templates/SvFrontView.vue'
import LoginModal from './components/Templates/SvLoginModal.vue'
import WorkspaceView from './components/Templates/SvWorkspaceView.vue'
import ActionView from './components/Templates/SvActionView.vue'
import CharacterView from './components/Templates/SvCharacterView.vue'
import WorldView from './components/Templates/SvWorldView.vue'
import ActionModal from './components/Templates/SvActionModal.vue'
import CharacterModal from './components/Templates/SvCharacterModal.vue'
import WorldModal from './components/Templates/SvWorldModal.vue'

//store読み込み
import store from './store'

//database読み込み
/*
import Action from './Models/Action'
import Character from './Models/Character'
import World from './Models/World'
import WorldPanel from './Models/WorldPanel'
*/

//route定義
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

//database定義
Vue.use(Vuex)
/*
const database = new VuexORM.Database()

database.register(Action, actions)
database.register(Character,characters)
database.register(World, worlds)
database.register(WorldPanel, world_panels)
*/
const state = {
    /*entities: {
        actions: {
            data: {}
        },
        characters: {
            data: {}
        },
        worlds: {
            data: {}
        },
        world_panels: {
            data:{}
        }
    },
    */
    auth: {
        token: null,
        userId: null
    },
    //以降にVuex.storeコンストラクタのstoreオプションの初期化を記述
    action: {
        id: null,
        function31: [
            '01. 留守・閉じ込め',
            '02. 禁止',
            '03. 違反',
            '04. 捜索',
            '05. 密告',
            '06. 謀略',
            '07. 黙認',
            '08. 加害または欠如',
            '09. 調停',
            '10. 主人公の同意',
            '11. 主人公の出発',
            '12. 贈与者による試練',
            '13. 主人公の反応',
            '14. 特別な手段の提供・獲得',
            '15. 主人公の移動',
            '16. 主人公の闘争・難題',
            '17. 狙われる主人公',
            '18. 敵対者に対する勝利',
            '19. 発端となった不幸・欠如の解消',
            '20. 主人公の帰還',
            '21. 追跡される主人公',
            '22. 主人公の救出',
            '23. 主人公が身分を隠し帰還',
            '24. 偽主人公の主張',
            '25. 主人公への難題',
            '26. 難題の完遂',
            '27. 主人公への再認識',
            '28. 偽主人公や敵対者の露見',
            '29. 主人公の変身・成長・昇格',
            '30. 敵対者の処遇決定',
            '31. エンディング'
        ],
        scene_id: null,
        character_id: null,
        target: '',
        motive: '',
        action_note: ''
    },
    scene: [
        
    ]
}
/*
const store = new Vuex.Store({
    //plugins: [VuexORM.install(database)],
    state,
    /*getters,
    actions,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
})
*/

export default new Vue({
    router,
    store,
    el: '#app'
})
