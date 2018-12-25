<template lang="pug">
.panel
	row
		.panel_item.col-md-3
			i.glyphicon.glyphicon-user
			slot(name="character_name")
		.panel_item.col-md-3
			i.fas.fa-users-cog
			slot(name="role_name")
		.panel_item.col-md-2
			i.glyphicon.glyphicon-leaf
			slot(name="character_age")
		.panel_item.col-md-2
			i.fas.fa-restroom
			slot(name="character_sex")
		.panel_interface.col-md-2
			i.edit.glyphicon.glyphicon-edit(@click="openEditModal")
			i.remove.glyphicon.glyphicon-remove

	SvModal(@close="closeEditModal" v-if="edit_mode")
		//- slot: .modal-content
		.form.container
			row
				.form-group
					.form-part.col-md-4
						label.form-label 名前
						input.form-control(v-model="name_edit" @input="updateCharacterName" placeholder="キャラクター名")
					.form-part.col-md-4
						label.form-label 役割
						.table.form-inline
							select.form-control.table-select(v-model="role_id" @input="updateCharacterRoleId")
								option(v-for="role in roles" :key="role.id" :value="role.id") {{ role.name }}
							button.btn.btn-default.btn-icon.form-control(@click="")
								i.glyphicon.glyphicon-info-sign
					.form-part.col-md-2
						label.form-label 年齢
						input.form-control(v-model="age_edit" @input="updateCharacterAge" placeholder="不詳")
					.form-part.col-md-2
						label.form-label 性別
						input.form-control(v-model="sex_edit" @input="updateCharacterSex" placeholder="不詳")
			row
				.form-group
					.form-part.col-md-12
						label.form-label 外見
						textarea.form-control(rows="2" v-model="app_edit" @input="updateCharacterApp" placeholder="第一印象など")
			row
				.form-group
					.form-part.col-md-12
						label.form-label メモ
						textarea.form-control(rows="5" v-model="character_note_edit" @input="updateCharacterNote" placeholder="自由にメモを取ることができます")
</template>

<script>
import SvActionPanel from '../Molecules/SvActionPanel'
import SvModal from '../Templates/SvModal'
import * as types from '../../store/mutation-types';
import { mapState, mapGetters, mapActions }  from 'vuex'

export default {
	name: 'SvCharacterPanel',

	data () {
		return {
			props:['character_id'],

			edit_mode: false,
			delete_mode: false
		}
	},

	methods: {
		openEditModal () {
			this.edit_mode = true
		},
		closeEditModal () {
			this.edit_mode =false
		},
		openDeleteModal () {
			this.delete_mode = true
		},
		closeDeleteModal () {
			this.delete_mode =false
		}
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

		name_edit: {
			get () {
				return this.$store.state.character.name
			},
			set (value) {
				this.$store.commit('updateCharacterName', value)
			}
		},
		role_id_edit: {
			get () {
				return this.$store.state.character.role_id
			},
			set (value) {
				this.$store.commit('updateCharacterRoleId', value)
			}
		},
		age_edit: {
			get () {
				return this.$store.state.character.age
			},
			set (value) {
				this.$store.commit('updateCharacterAge', value)
			}
		},
		sex_edit: {
			get () {
				return this.$store.state.character.sex
			},
			set (value) {
				this.$store.commit('updateCharacterSex', value)
			}
		},
		app_edit: {
			get () {
				return this.$store.state.character.app
			},
			set (value) {
				this.$store.commit('updateCharacterApp', value)
			}
		},
		character_note_edit: {
			get () {
				return this.$store.state.character.character_note
			},
			set (value) {
				this.$store.commit('updateCharacterNote', value)
			}
		},
	}
}
</script>

<style lang="stylus">
@import "../../../stylus/_variables.styl"
// .panelを読み込む
@import "../../../stylus/_extend.styl"
</style>