<template lang="pug">
#world.window
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
						vue-slider(v-model="light" v-bind="slider_options")
					.form-part.col-md-4
						label.form-label 音量
						vue-slider(v-model="sound" v-bind="slider_options")
			row
				.form-group
					.form-part.col-md-12
						label.form-label メモ
						textarea.form-control(rows="5" v-model="world_panel_note" placeholder="自由にメモを取ることができます")
		template(slot="footer")
			button.btn.btn-primary(@click="ADD_WORLD_PANEL({name, light, sound, world_panel_note})") 追加

</template>

<script>
import SvWorldPanel from '../Molecules/SvWorldPanel'
import SvModal from '../Templates/SvModal'
import * as types from '../../store/mutation-types';
import { mapState, mapGetters, mapActions }  from 'vuex'
import vueSlider from 'vue-slider-component'

export default {
	name: 'SvWorldWindow',

	components: {
		SvWorldPanel,
		SvModal,
		vueSlider
	},

	data () {
    return {
			modal: false,

			/*** vue-slider-component の設定 ***/
			slider_options: {
				// 機能
				tooltip: false,
				piecewise: true,
				piecewiseLabel: true,
				// data
				data: ["1","2","3","4","5"],
				// style
				bgStyle: {
					"backgroundColor": "#9A8D72"
				},
				processStyle: {
					"backgroundColor": "#F2F2E3"
				},
				piecewiseStyle: {
					"backgroudColor": "#ccc",
					"visibility": "visible",
					"width": "16px",
					"height": "16px"
				},
				piecewiseActiveStyle: {
					"backgroundColor": "#9A8D72",
					"color": "F2F2E3"
				},
				labelActiveStyle: {
					"color": "#F2F2E3"
				}
			}
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
		...mapActions([types.ADD_WORLD_PANEL]),
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
