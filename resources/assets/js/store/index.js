import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import { isContext } from 'vm';

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        //初期ステート
        actions: [
            {
                id: 1,
                function31_id: 1,
                worldPanel_id: 1,
                character_id: 1,
                motive: 'ここに行動主の行動動機を記載できます．',
                action_note: '何でもメモしてください．'
            }
        ],
        characters: [
            {
                id: 1,
                name: 'キャラ名',
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
                age: '青年',
                sex: '男性',
                app: '特定の像は与えない',
                character_note: 'ーこれもサンプルですー　ラゴスは南へと旅に出た．旅のための旅だった．'
            }
        ],
        roles: [
            {
                id: 1,
                name: '主人公',
                description: ''
            },
            {
                id: 2,
                name: '敵対者',
                description: '',
            },
            {
                id: 3,
                name: '贈与者',
                description: ''
            },
            {
                id: 4,
                name: '助手',
                description: ''
            },
            {
                id: 5,
                name: '被害者',
                description: ''
            },
            {
                id: 6,
                name: '派遣者',
                description: ''
            },
            {
                id: 7,
                name: '偽主人公',
                description: ''
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
                id: 0,
                name: '00. 導入の状況',
                description: '舞台の状況説明'
            },
            {
                id: 1,
                name: '01. 不在',
                description: '家族やグループメンバーの留守，死亡，誘拐，監禁など',
            },
            {
                id: 2,
                name: '02. 禁止',
                description: '主人公が何かを禁じられる．あるいは社会に禁忌や危険な領域が存在する．',
            },
            {
                id: 3,
                name: '03. 違反',
                description: '[02. 禁止]が破られる．',
            },
            {
                id: 4,
                name: '04. 捜索',
                description: '敵対者が主人公の弱点，物語で重要な人やアイテムの在処，聖域などを探る．',
            },
            {
                id: 5,
                name: '05. 漏洩',
                description: '[04. 捜索]が密告などにより成就する．',
            },
            {
                id: 6,
                name: '06. 謀略',
                description: '敵対者が主人公を騙す，罠に嵌める，噂で陥れるなどをする',
            },
            {
                id: 7,
                name: '07. 幇助',
                description: '主人公が半強制的あるいは気付かずに敵対者を助ける．または主人公の仲間が買収される．先に報酬が提示される代わりに，将来的な不幸が約束されることもある．',
            },
            {
                id: 8,
                name: '08. 加害・欠如',
                description: '敵対者が主人公側の成員や社会に危害を及ぼす．昼の光を奪う，無理な結婚を強いる，殺害を命じる，誘き出す，略奪する，すり替える，追放するなど．または配偶者，金品，目標と現在のギャップ，その他様々なものの欠如を感じる．',
            },
            {
                id: 9,
                name: '09. 仲介・調停',
                description: '主人公が出発を命じられたり頼まれたり，惨状や悲嘆を耳にしたり目撃したりする．あるいは逃れられない状況に身を置く．',
            },
            {
                id: 10,
                name: '10. 決意・同意',
                description: '主人公が出発を決意する．あるいは渋々同意する．',
            },
            {
                id: 11,
                name: '11. 出発',
                description: '[10. 決意・同意]のもと出発する．現状を再確認したり掘り下げることも．',
            },
            {
                id: 12,
                name: '12. 贈与者による試練',
                description: '贈与者が贈与前に主人公へ試練を課す．',
            },
            {
                id: 13,
                name: '13. 反応',
                description: '困難な試練を辛うじて達成する．あるいはギリギリで失敗する．贈与者自身が協力者となり，大きな困難を達成する．',
            },
            {
                id: 14,
                name: '14. 特別な手段の提供・獲得',
                description: '贈与者を協力者として得たり，秘儀，秘宝，パスワード，秘密の抜け道，強力な道具などを入手する．',
            },
            {
                id: 15,
                name: '15. 移動',
                description: '大掛かりな場面移動．新たな移動手段の獲得や強制的な移動など．飛行船，城外，タイムトラベル等．',
            },
            {
                id: 16,
                name: '16. 闘争・難題',
                description: '敵対者との闘争，困難な問題への対処．',
            },
            {
                id: 17,
                name: '17. 徴付け・被照準',
                description: '主人公が特徴づけられ，敵対者に狙いを絞られる．庇護者の死，隠されていた主人公の露見，主人公の才能開花の確認等による照準移行',
            },
            {
                id: 18,
                name: '18. 勝利',
                description: '敵対者への完全なまたは一時的な勝利．戦闘，説得，逮捕，試合，脱出，耐久など．',
            },
            {
                id: 19,
                name: '19. 不幸・欠如の解消',
                description: '当初の目標の達成．呪いの解除，略奪品の回収，脅威の排除，和解，優勝，結婚など．',
            },
            {
                id: 20,
                name: '20. 帰還',
                description: '[15. 移動]していた主人公の帰還．エンディングへ．場合によっては帰路のみを指し物語を続行．',
            },
            {
                id: 21,
                name: '21. 被追跡',
                description: '[20. 帰還]中の主人公が密かに，あるいは荒々しく追跡される．物理的でなくとも，禍根が残っている様子も示す．',
            },
            {
                id: 22,
                name: '22. 救助',
                description: '[21. 被追跡]から救われる．追跡者の排除，誤解の解消，和解，匿われる，逃げ切りなど．',
            },
            {
                id: 23,
                name: '23. 隠蔽された到着',
                description: '気づかれずに主人公が帰還し終える．仲間と合流，どこかへ去る，主人公の死を想起させるなど．',
            },
            {
                id: 24,
                name: '24. 偽主人公の主張',
                description: '主人公やその成員を名乗る者が出現し，主人公の功績を我が物と言い張る．',
            },
            {
                id: 25,
                name: '25. 主人公への難題',
                description: '[24. 偽主人公の主張]に対し，自身が真の主人公であることを証明する試練．',
            },
            {
                id: 26,
                name: '26. 難題の完遂',
                description: '[25. 主人公への難題]の解消．',
            },
            {
                id: 27,
                name: '27. 主人公への再認識',
                description: '[17. 徴付け]時の徴により主人公であることを再認識．目，指輪，思い出，特殊な道具，傷跡など．',
            },
            {
                id: 28,
                name: '28. 偽主人公や敵対者の露見',
                description: '[27. 主人公への再認識]により偽主人公または敵対者の虚偽が露見する．主人公が本物である，主人公やその成員への悪い噂は嘘であるなど．',
            },
            {
                id: 29,
                name: '29. 変身',
                description: '主人公の容姿が一般に良い方向へ変化する．衣装，顔，種族など．あるいは成員や土地の変化．最上位のグループ，豪邸，使用していた武器の特別な修理など．',
            },
            {
                id: 30,
                name: '30. 敵対者の処遇決定',
                description: '敵対者の完全な終結．勧善懲悪，赦免，復讐，諦観など．',
            },
            {
                id: 31,
                name: '31. エンディング',
                description: '物語としての終わり．主人公の結婚，優勝，昇格，死亡，失踪など．',
            },
        ],
        note: '',

        // 次に追加される各種stateを決め打ち
        nextActionId: 2,
        nextCharacterId: 4,
        nextWorldId:2,
        nextWorldPanelId: 4
    },

    actions: {
        // ADD_XXX の定義
        // TODO: ADD_WORLD, ADD_WORLDPANEL
        [types.ADD_ACTION](
            {
                commit,
                state
            },
            {
                function31_id,
                worldPanel_id,
                character_id,
                motive,
                action_note
            }
        )
        {
            let newAction = {
                id: state.nextActionId,
                function31_id: function31_id,
                worldPanel_id: worldPanel_id,
                character_id: character_id,
                motive: motive,
                action_note: action_note
            }
            commit(types.ADD_ACTION, {
                data: newAction
            })
        },

        [types.ADD_CHARACTER](
            {
                commit,
                state
            },
            {
                name,
                role_id,
                age,
                sex,
                app,
                character_note
            }
        )
        {
            let newCharacter = {
                id: state.nextCharacterId,
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
        },

        [types.ADD_WORLD](
            {
                commit,
                state
            },
            {
                name,
                world_note
            }
        )
        {
            let newWorld = {
                id: state.nextWorldId,
                name: name,
                world_note: world_note
            }
            commit(types.ADD_WORLD, {
                data: newWorld
            })
        },

        [types.ADD_WORLD_PANEL](
            {
                commit,
                state
            },
            {
                name,
                world_id,
                light,
                sound,
                world_panel_note
            }
        )
        {
            let newWorldPanel = {
                id: state.nextWorldPanelId,
                name: name,
                world_id: world_id,
                light: light,
                sound: sound,
                world_panel_note: world_panel_note
            }
            commit(types.ADD_WORLD_PANEL, {
                data: newWorldPanel
            })
        }
    },

    mutations: {
        [types.ADD_ACTION](state, payload) {
            state.actions.push(payload.data)
            state.nextActionId++
        },
        [types.ADD_CHARACTER](state, payload) {
            state.characters.push(payload.data)
            state.nextCharacterId++
        },
        [types.ADD_WORLD](state, payload) {
            state.worlds.push(payload.data)
            state.nextWorldId++
        },
        [types.ADD_WORLD_PANEL](state, payload) {
            state.worldPanels.push(payload.data)
            state.nextWorldPanelId++
        },
    },

    getters: {
        /***
         * Stateの取得処理
         * 1. オブジェクト取得 - Object
         * 2. .name取得 - String
         * 3. .note取得 - String(textarea用)
         * 4. その他
         */
        // 1. オブジェクト取得
        getActionbyId: (state) => (id) => {
            return state.actions.filter(action => action.id === id)[0]
        },
        getCharacterbyId: (state) => (id) => {
            return state.characters.filter(character => character.id === id)[0]
        },
        getRoleById: (state) => (id) => {
            return state.roles.filter(role => role.id === id)[0]
        },
        getWorldPanelbyId: (state) => (id) => {
            return state.worldPanels.filter(worldPanel => worldPanel.id === id)[0]
        },
        getFunction31byId: (state) => (id) => {
            return state.function31s.filter(function31 => function31.id === id)[0]
        },

        // 2. .name取得 - String
        getCharacterNameById: (state, getters) => (id) => {
            const character = getters.getCharacterbyId(id)
            return character ? character.name : ''
        },
        getRoleNameById: (state, getters) => (id) => {
            const role = getters.getRoleById(id)
            return role ? role.name : ''
        },
        getWorldPanelNameById: (state, getters) => (id) => {
            const worldPanel = getters.getWorldPanelbyId(id)
            return worldPanel ? worldPanel.name : ''
        },
        getWorldPanelLightById: (state, getters) => (id) => {
            const worldPanel = getters.getWorldPanelbyId(id)
            return worldPanel ? worldPanel.light : ''
        },
        getWorldPanelSoundById: (state, getters) => (id) => {
            const worldPanel = getters.getWorldPanelbyId(id)
            return worldPanel ? worldPanel.sound : ''
        },
        getFunction31NameById: (state, getters) => (id) => {
            const function31 = getters.getFunction31byId(id)
            return function31 ? function31.name : ''
        },
    }
})