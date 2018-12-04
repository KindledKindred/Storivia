<template lang="pug">
#action.window
	span.window_title 行動
	.container-fluid
		row
			SvActionPanel.col-md-4(v-for="action in actions" :key="action.id")
	footer
		button.btn.btn-primary(@click="openModal") パネル追加

	SvModal(@close="closeModal" v-if="modal")
		//- slot: .modal-content
		.form.container
			row
				.form-group
						.form-part.col-md-6
							label.form-label 機能
							select.form-control.selectpicker(v-model="function31_id")
								option(v-for="function31 in function31s" :key="function31.id") {{ function31.name }}
						.form-part.col-md-6
							label.form-label シーン
							select.form-control(v-model="scene_id")
								option(v-for="worldPanel in worldPanels" :key="worldPanel.id") {{ worldPanel.name }}
			row
				.form-group
					.form-part.col-md-6
						label.form-label 行動者
						select.form-control(v-model="character_id")
							option(v-for="character in characters" :key="character.id") {{ character.name }}
			row
				.form-group
					.form-part.col-md-12
						label.form-label 動機
						textarea.form-control(rows="3" v-model="motive" placeholder="動機")
			row
				.form-group
					.form-part.col-md-12
						label.form-label メモ
						textarea.form-control(rows="5" v-model="action_note" placeholder="自由にメモを取ることができます")
		template(slot="footer")
			button.btn.btn-primary(@click="ADD_ACTION(function31.id, scene_id, character_id, motive, action_note)") 追加

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
      modal: false
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
		...mapActions([types.ADD_ACTION])
	},

	computed: {
		...mapState(['actions']),
		...mapState(['characters']),
		...mapState(['worldPanels']),
		...mapState(['function31s'])
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
</style>

