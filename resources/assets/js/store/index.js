import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        //初期ステート
        actions: [
            {
                id: 1,
                function31_id: 1,
                scene_id: 1,
                character_id: 1,
                motive: 'ここに行動主の行動動機を記載できます．',
                action_note: '何でもメモしてください．'
            }
        ],
        characters: [
            {
                id: 1,
                name: '名前，通り名，略称，称号，階級',
                role_id: 1,
                age: '20',
                sex: '不明',
                app: 'ここに第一印象や声の特徴などを記載できます．',
                character_note: '何でもメモしてください．'
            },
            {
                id: 2,
                name: 'R氏',
                role_id: 1,
                age: '46',
                sex: '男性',
                app: 'よく焼けた肌と大きな丸眼鏡が特徴的な研究者',
                character_note: 'ーこれはサンプルですー　研究と釣り以外には興味を示さない．'
            },
            {
                id: 3,
                name: 'ラゴス',
                role_id: 1,
                age: '青年期～老年期',
                sex: '男性',
                app: '特定の像は与えない',
                character_note: 'ーこれもサンプルですー　ラゴスは南へと旅に出た．旅のための旅だった．'
            }
        ],
        worlds: [
            {
                id: 1,
                name: '土地や建物など舞台の土台',
                world_note: '何でもメモしてください．'
            }
        ],
        worldPanels: [
            {
                id: 1,
                name: 'ランドマークや部屋など具体的なシーン',
                light: 2,
                sound: 4,
                world_panel_note: '何でもメモしてください．'
            },
            {
                id: 2,
                name: '水車小屋：昼',
                light: 4,
                sound: 2,
                world_panel_note: 'ーこれはサンプルですー　村で１番小さい水車小屋．川の水量が少なくなってからはあまり動いていない．'
            },
            {
                id: 3,
                name: '父の書斎',
                light: 2,
                sound: 1,
                world_panel_note: 'ーこれもサンプルですー　父の亡き後そのままにされている書斎だ．カーテンから漏れる陽光に舞い上がった埃が遊ぶように輝いている．'
            }
        ],
        // プロップの31の機能．静的オブジェクト．
        function31s: [
            {
                id: 1,
                name: '01. 留守・閉じ込め',
                description: '',
            },
            {
                id: 2,
                name: '02. 禁止',
                description: '',
            },
            {
                id: 3,
                name: '03. 違反',
                description: '',
            },
            {
                id: 4,
                name: '04. 捜索',
                description: '',
            },
            {
                id: 5,
                name: '05. 密告',
                description: '',
            },
            {
                id: 6,
                name: '06. 謀略',
                description: '',
            },
            {
                id: 7,
                name: '07. 黙認',
                description: '',
            },
            {
                id: 8,
                name: '08. 加害または欠如',
                description: '',
            },
            {
                id: 9,
                name: '09. 調停',
                description: '',
            },
            {
                id: 10,
                name: '10. 主人公の同意',
                description: '',
            },
            {
                id: 11,
                name: '11. 主人公の出発',
                description: '',
            },
            {
                id: 12,
                name: '12. 贈与者による試練',
                description: '',
            },
            {
                id: 13,
                name: '13. 主人公の反応',
                description: '',
            },
            {
                id: 14,
                name: '14. 特別な手段の提供・獲得',
                description: '',
            },
            {
                id: 15,
                name: '15. 主人公の移動',
                description: '',
            },
            {
                id: 16,
                name: '16. 主人公の闘争・難題',
                description: '',
            },
            {
                id: 17,
                name: '17. 狙われる主人公',
                description: '',
            },
            {
                id: 18,
                name: '18. 敵対者に対する勝利',
                description: '',
            },
            {
                id: 19,
                name: '19. 発端となった不幸・欠如の解消',
                description: '',
            },
            {
                id: 20,
                name: '20. 主人公の帰還',
                description: '',
            },
            {
                id: 21,
                name: '21. 追跡される主人公',
                description: '',
            },
            {
                id: 22,
                name: '22. 主人公の救出',
                description: '',
            },
            {
                id: 23,
                name: '23. 主人公が身分を隠し帰還',
                description: '',
            },
            {
                id: 24,
                name: '24. 偽主人公の主張',
                description: '',
            },
            {
                id: 25,
                name: '25. 主人公への難題',
                description: '',
            },
            {
                id: 26,
                name: '26. 難題の完遂',
                description: '',
            },
            {
                id: 27,
                name: '27. 主人公への再認識',
                description: '',
            },
            {
                id: 28,
                name: '28. 偽主人公や敵対者の露見',
                description: '',
            },
            {
                id: 29,
                name: '29. 主人公の変身',
                description: '',
            },
            {
                id: 30,
                name: '30. 敵対者の処遇決定',
                description: '',
            },
            {
                id: 31,
                name: '31. エンディング',
                description: '',
            },
        ]
    },

    actions: {
        // ADD_XXX
        // TODO: ADD_WORLD, ADD_WORLDPANEL
        [types.ADD_ACTION](
            { commit },
            function31_id,
            scene_id,
            character_id,
            motive,
            action_note
        )
        {
            let newAction = {
                function31_id: function31_id,
                scene_id: scene_id,
                character_id: character_id,
                motive: motive,
                action_note: action_note
            }
            commit(types.ADD_ACTION, {
                data: newAction
            })
        },

        [types.ADD_CHARACTER](
            { commit },
            name,
            role_id,
            age,
            sex,
            app,
            character_note
        )
        {
            let newCharacter = {
                name: name,
                role_id: role_id,
                age: age,
                sex: sex,
                app: app,
                character_note: character_note
            }
            commit(types.ADD_CHARACTER, {
                data: newCharacter
            })
        }
    },

    mutations: {
        // ADD_XXX
        // TODO: 追加場所をidによって上下変更？分岐は？逆行は？
        [types.ADD_ACTION](state, payload) {
            state.actions.push(payload.data);
        },
        [types.ADD_CHARACTER](state, payload) {
            state.characters.push(payload.data);
        },
    }
})