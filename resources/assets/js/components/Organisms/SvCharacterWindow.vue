<template lang="pug">
#character.window
	.container-fluid
		row
			//- キャラクターパネルをロール(role_id)順にソートして全表示
			.panel_container(v-for="character in this.getCharactersSortByRoleId" :character_id="character.id")
				SvCharacterPanel
					template(slot="character_name") {{ character.name }}
					template(slot="role_name") {{ getRoleNameById(character.role_id) }}
					template(slot="character_age") {{ character.age }}
					template(slot="character_sex") {{ character.sex }}
	footer
		button.btn.btn-primary(@click="openModal") パネル追加

	SvModal(@close="closeModal" v-if="modal")
		//- slot: .modal-content
		.form.container
			row
				.form-group
					.form-part.col-md-4
						label.form-label 名前
						input.form-control(v-model="name" placeholder="キャラクター名")
					.form-part.col-md-4
						label.form-label 役割
						.table.form-inline
							select.form-control.table-select(v-model="role_id")
								option(v-for="role in roles" :key="role.id" :value="role.id") {{ role.name }}
							button.btn.btn-default.btn-icon.form-control(@click="")
								i.glyphicon.glyphicon-info-sign
					.form-part.col-md-2
						label.form-label 年齢
						input.form-control(v-model="age" placeholder="不詳")
					.form-part.col-md-2
						label.form-label 性別
						input.form-control(v-model="sex" placeholder="不詳")
			row
				.form-group
					.form-part.col-md-12
						label.form-label 外見
						textarea.form-control(rows="2" v-model="app" placeholder="第一印象など")
			row
				.form-group
					.form-part.col-md-12
						label.form-label メモ
						textarea.form-control(rows="5" v-model="character_note" placeholder="自由にメモを取ることができます")
		template(slot="footer")
			button.btn.btn-primary(@click="ADD_CHARACTER({name, role_id, age, sex, app, character_note})") 追加

</template>

<script>
import SvCharacterPanel from '../Molecules/SvCharacterPanel'
import SvModal from '../Templates/SvModal'
import * as types from '../../store/mutation-types';
import { mapState, mapGetters, mapActions }  from 'vuex'

export default {
	name: 'SvCharacterWindow',

	components: {
		SvCharacterPanel,
		SvModal
	},

	data () {
    return {
			modal: false,
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
		...mapActions([types.ADD_CHARACTER]),
		// パネル追加時にモーダルの入力内容を初期化
	},

	computed: {
		...mapState([
			'characters',
			'roles',
			'nextCharacterId',
			]),

		...mapGetters([
			'getCharacterById',
			'getRoleById',

			'getCharacterNameById',
			'getRoleNameById'
		]),

		// パネル追加時に機能idでソート
		// _.function は lodash というライブラリのもの
		// sortByは破壊的(配列を上書きする)な昇順ソート処理
		getCharactersSortByRoleId () {
			return _.sortBy(this.characters, ['role_id'])
		}
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

.table
	display table
	margin 0

.table-select
	display table-cell
	max-width 85%
	min-width 85%
</style>
