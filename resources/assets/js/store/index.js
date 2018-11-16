Vue.use(Vuex)

const state = {
    auth: {
        token: null,
        userId: null
    }
    //以降にVuex.storeコンストラクタのstoreオプションの初期化を記述
}

export default new Vuex.Store ({
    state,
    getters,
    actions,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
})