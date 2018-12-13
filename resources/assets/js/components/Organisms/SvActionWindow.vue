<template lang="pug">
#action.window
	span.window_title 行動
	.container-fluid
		row
			//- 行動パネルをプロップの31の機能(function31_id)順にソートして全表示
			.panel_container(v-for="action in actions" :key="action.function31_id")
				SvActionPanel
					template(slot="function31_name") {{ getFunction31NameById(action.function31_id) }}
					template(slot="world_panel_name") {{ getWorldPanelNameById(action.worldPanel_id) }}
					template(slot="world_panel_light") {{ getWorldPanelLightById(action.worldPanel_id) }}
					template(slot="world_panel_sound") {{ getWorldPanelSoundById(action.worldPanel_id) }}
					template(slot="character_name") {{ getCharacterNameById(action.character_id) }}
					template(slot="action.motive") {{ action.motive }}
	footer
		button.btn.btn-primary(@click="openModal") パネル追加

	SvModal(@close="closeModal" v-if="modal")
		//- slot: .modal-content
		.form.container
			row
				.form-group
					.form-part.col-md-4
						label.form-label 機能
						.table.form-inline
							select.form-control.selectpicker.table-select(v-model="function31_id")
								option(v-for="function31 in function31s" :key="function31.id" :value="function31.id") {{ function31.name }}
							button.btn.btn-default.btn-icon.form-control(@click="")
								i.glyphicon.glyphicon-info-sign
					.form-part.col-md-4
						label.form-label シーン
						.table.form-inline
							select.form-control.table-select(v-model="worldPanel_id")
								option(v-for="worldPanel in worldPanels" :key="worldPanel.id" :value="worldPanel.id") {{ worldPanel.name }}
							button.btn.btn-default.btn-icon.form-control(@click="")
								i.glyphicon.glyphicon-info-sign
					.form-part.col-md-4
						label.form-label 行動者
						.table.form-inline
							select.form-control.table-select(v-model="character_id")
								option(v-for="character in characters" :key="character.id" :value="character.id") {{ character.name }}
							button.btn.btn-default.btn-icon.form-control(@click="")
								i.glyphicon.glyphicon-info-sign
			row
				.form-group
					.form-part.col-md-12
						label.form-label 動機
						textarea.form-control(rows="2" v-model="motive" placeholder="動機")
			row
				.form-group
					.form-part.col-md-12
						label.form-label メモ
						textarea.form-control(rows="5" v-model="action_note" placeholder="自由にメモを取ることができます")
		template(slot="footer")
			button.btn.btn-primary(@click="ADD_ACTION({function31_id, worldPanel_id, character_id, motive, action_note}); resetModel") 追加

</template>

<script>
import SvActionPanel from '../Molecules/SvActionPanel'
import SvModal from '../Templates/SvModal'
import * as types from '../../store/mutation-types';
import { mapState, mapGetters, mapActions }  from 'vuex'

export default {
	name: 'SvActionWindow',

	components: {
		SvActionPanel,
		SvModal
	},

	data () {
    return {
			modal: false,
			
			//storeに代入するプロパティの初期値
			function31_id: 0,
			worldPanel_id: 0,
			character_id: 0,
			motive: '',
			action_note: '',
			//storeを参照するオブジェクトの初期値
			function31: {
				id: '',
				name: ''
			},
			character: {
				id: '',
				name: ''
			},
			world: {
				id: '',
				name: ''
			},
			worldPanel: {
				id: '',
				name: '',
				light: 0,
				sound: 0
			},
    }
  },

	methods: {
		// modalの開閉処理
		openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
		},

		// パネル追加
		...mapActions([types.ADD_ACTION]),

		// パネル追加時にモーダルの入力内容を初期化
		resetModel () {
			this.function31_id = 0,
			this.worldPanel_id = 0,
			this.character_id =  0,
			this.motive = '',
			this.action_note = ''
		}
	},

	computed: {
		...mapState([
			'actions',
			'characters',
			'worldPanels',
			'function31s',
			'nextActionId',
			'nextCharacterId',
			'nextWorldId',
			'nextWorldPanelId',
			]),

		...mapGetters([
			'getActionById',
			'getCharacterById',
			'getWorldPanelById',
			'getFunction31ById',

			'getCharacterNameById',
			'getWorldPanelNameById',
			'getWorldPanelLightById',
			'getWorldPanelSoundById',
			'getFunction31NameById'
		]),
	}
}
</script>

<style lang="stylus" scoped>
@import "../../../stylus/_variables.styl"
// .windowを読み込む
@import "../../../stylus/_extend.styl"

footer
	text-align center
	margin-top 8px
	padding 4px

.btn-icon
	display table-cell
	margin-left 5%
	padding 0
	font-size 180%
	background-color _background-color
	color _white
	border none
	vertical-align middle

.table
	display table
	margin 0

.table-select
	display table-cell
	max-width 85%
	min-width 85%
</style>

