const state = {
    //初期ステート
    actions: [
        {
            id: 1,
            function31_id: 1,
            scene_id: 1,
            character_id: 1,
            target: 'ここに行動主の行動動機を記載できます．',
            action_note: '何でもメモしてください．'
        }
    ]
}

const mutations = {
    setAction(state, actions) {
        state.actions = actions
    },
    updateAction(state, {action, newAction}) {
        Object.assigin(action, newAction)
    },
    deleteAction(state, index) {
        state.actions.splice(index, 1)
    },
    addAction(state, action) {
        state.actions.push(action)
    }
}

const getters = {
    getActions (state) {
        return state.actions
    }
}

const actions = {
    async fetch ({ commit }) {
        await axios.get('api/actions').then(res => {
            commit('setAction', res.data)
        })
    },
    async delete ({state, commit}, action) {
        const index = state.actions.indexOf(action)

        return await axios.delete('api/actions/' + action.id)
        .then(res => {
            commit('deleteAction', index)
            return true
        }).catch(error => {
            return error
        })
    },
    async store ({state, commit}, action) {
        return await axios.post('/api/actions/', action)
        .then(res => {
            commit('addAction', res.data)
            return true
        }).catch(error => {
            return error
        })
    },
    async update ({state, commit}, newAction) {
        // stateからマッチしたactionを取り出す
        const action = state.actions.find((o) => {
            return o.id === newAction.id
        })

        if(!action) {
            return false
        }

        return await axios.patch('/api/actions' + newAction.id, newAction)
        .then(res => {
            commit('updateAction', {action, newAction})
            return true
        }).catch(error => {
            return error
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}