<template lang="pug">
#world.window
	span.window_title WORLDS
	.container-fluid
		row
			//- キャラクターパネルをロール(role_id)順にソートして全表示
			.panel_container(v-for="worldPanel in worldPanels")
				SvWorldPanel
					template(slot="worldPanel_name") {{ worldPanel.name }}
					template(slot="worldPanel_light") {{ worldPanel.light }}
					template(slot="worldPanel_sound") {{ worldPanel.sound }}
	footer
		button.btn.btn-primary(@click="openModal") パネル追加

	SvModal(@close="closeModal" v-if="modal")
		//- slot: .modal-content
		.form.container
			row
				.form-group
					.form-part.col-md-4
						label.form-label 名前
						input.form-control(v-model="name" placeholder="シーン名（時間帯）")
					.form-part.col-md-4
						label.form-label 光量
						input.form-control.input-light(v-model="light" data-slider-ticks="[1,2,3,4,5]" data-slider-ticks-snap-bounds="1" data-slider-ticks-labels='["1","2","3","4","5"]')
					.form-part.col-md-4
						label.form-label 音量
						input.form-control.input-sound(v-model="sound" data-slider-ticks="[1,2,3,4,5]" data-slider-ticks-snap-bounds="1" data-slider-ticks-labels='["1","2","3","4","5"]')
			row
				.form-group
					.form-part.col-md-12
						label.form-label メモ
						textarea.form-control(rows="5" v-model="world_panel_note" placeholder="自由にメモを取ることができます")
		template(slot="footer")
			button.btn.btn-primary(@click="ADD_CHARACTER({name, role_id, age, sex, app, character_note})") 追加

</template>

<script>
import SvWorldPanel from '../Molecules/SvWorldPanel'
import SvModal from '../Templates/SvModal'
import * as types from '../../store/mutation-types';
import { mapState, mapGetters, mapActions }  from 'vuex'
/*
$("#ex13").slider({
    ticks: [0, 100, 200, 300, 400],
    ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
    ticks_snap_bounds: 30
});
*/
export default {
	name: 'SvWorldWindow',

	components: {
		SvWorldPanel,
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
			'worldPanels',
			'nextWorldPanelId',
			])
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
