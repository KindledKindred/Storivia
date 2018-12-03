<template lang="pug">
#character.window
	span.window_title キャラクター
	- for (character in characters)
		p
			SvCharacterPanel
	footer
		button.btn.btn-primary(@click="openModal") パネル追加

	SvModal(@close="closeModal" v-if="modal")
		//- slot: .modal-content
		.form.container
			row
				.form-group
					.form-part.col-md-6
						label.form-label 名前
						input.form-control(v-model="character_name" placeholder="名前")
				.form-group
					.form-part.col-md-6
						label.form-label 機能
						input.form-control(v-model="character_role" placeholder="機能")
			row
				.form-group
					.form-part.col-md-6
						label.form-label 年齢
						input.form-control(v-model="character_age" placeholder="年齢")
				.form-group
					.form-part.col-md-6
						label.form-label 性別
						input.form-control(v-model="character_sex" placeholder="性別")
			row
				.form-group
					.form-part.col-md-12
						label.form-label 外見
						textarea.form-control(rows="2" v-model="character_app" placeholder="第一印象などを記述できます")
			row
				.form-group
					.form-part.col-md-12
						label.form-label メモ
						textarea.form-control(rows="5" v-model="act_note" placeholder="自由にメモを取ることができます")
		template(slot="footer")
			button.btn.btn-primary(@click="edit") 追加
</template>

<script>
import SvCharacterPanel from '../Molecules/SvCharacterPanel'
import SvModal from '../Templates/SvModal'

export default {
	name: 'SvCharacterWindow',

	components: {
		SvCharacterPanel,
		SvModal
	},

  data() {
    return {
      modal: false
    }
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
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
