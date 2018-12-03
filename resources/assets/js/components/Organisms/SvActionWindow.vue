<template lang="pug">
#action.window
	span.window_title 行動
	p
		SvActionPanel
	footer
		button.btn.btn-primary(@click="openModal") パネル追加

	SvModal(@close="closeModal" v-if="modal")
		//- slot: .modal-content
		.form.container
			row
				.form-group
						.form-part.col-md-6
							label.form-label 機能
							input.form-control(v-model="function31" placeholder="機能")
						.form-part.col-md-6
							label.form-label シーン
							input.form-control(v-model="scene_id" placeholder="シーン")
			row
				.form-group
					.form-part.col-md-6
						label.form-label 行動主
						input.form-control(v-model="character_id" placeholder="行動主")
				.form-group
					.form-part.col-md-6
						label.form-label 行動対象
						input.form-control(v-model="target" placeholder="行動対象")
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
			button.btn.btn-primary(@click="addAction") 追加

</template>

<script>
import SvActionPanel from '../Molecules/SvActionPanel'
import SvModal from '../Templates/SvModal'

export default {
	name: 'SvActionWindow',

	components: {
		SvActionPanel,
		SvModal
	},

  data () {
    return {
			modal: false,

			actions: [],
			new_action: {
				new_character_id: 0,
				new_target: '',
				new_scene_id: 0,
				new_motive: '',
				new_action_note: ''
			}
    }
	},
	
  methods: {
		//パネル編集のモーダル処理
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
		},
		
		//axios利用
		fecthActions: function() {
			axios.get('/api/get_actions').then((res) => {
				this.actions = res.actions
			})
		},
		addAction: function() {
			axios.post('/api/add', {
				character_id: this.new_character_id,

			})
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
</style>

