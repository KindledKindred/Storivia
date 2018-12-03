const state = {
    //初期ステート
    characters: [
        {
            id: 1,
            name: 'テスト',
            role_id: 1,
            age: 20,
            sex: '不明',
            app: 'ここに第一印象や声の特徴などを記載できます．',
            character_note: '何でもメモしてください．'
        }
    ]
}

const mutations = {
    setData(state, characters) {
        state.characters = characters
    },
    update(state, {character, newCharacter}) {
        Object.assigin(character, newCharacter)
    },
    delete(state, index) {
        state.characters.splice(index, 1)
    },
    add(state, character) {
        state.characters.push(character)
    }
}

const getters = {
    getCharacters (state) {
        return state.characters
    }
}

const characters = {
    async fetch ({ commit }) {
        await axios.get('api/characters').then(res => {
            commit('setData', res.data)
        })
    },
    async delete ({state, commit}, character) {
        const index = state.characters.indexOf(character)

        return await axios.delete('api/characters/' + character.id)
        .then(res => {
            commit('delete', index)
            return true
        }).catch(error => {
            return error
        })
    },
    async store ({state, commit}, character) {
        return await axios.post('/api/characters/', character)
        .then(res => {
            commit('add', res.data)
            return true
        }).catch(error => {
            return error
        })
    },
    async update ({state, commit}, newCharacter) {
        // stateからマッチしたcharacterを取り出す
        const character = state.characters.find((o) => {
            return o.id === newCharacter.id
        })

        if(!character) {
            return false
        }

        return await axios.patch('/api/characters' + newCharacter.id, newcharacter)
        .then(res => {
            commit('update', {character, newCharacter})
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
    characters
}