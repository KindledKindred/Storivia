import Vue from 'vue'
import Vuex from 'vuex'

import action from './modules/action'
import character from './modules/character'
import world from './modules/world'
import world_panel from './modules/world_panel'

Vue.use(Vuex)

export default new Vuex.Store ({
    modules: {
        action,
        character,
        world,
        world_panel
    },
    strict: true
})