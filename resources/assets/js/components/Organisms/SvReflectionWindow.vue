<template lang="pug">
#reflection.window
	.container-fluid
	footer
		button.btn.btn-darker(@click="openModal") Q & A を開く

	SvModal(@close="closeModal" v-if="modal")
		SvQandA
</template>

<script>
import SvModal from '../Templates/SvModal'
import SvQandA from '../Molecules/SvQandA'

export default {
	name: 'SvReflectionWindow',

	components: {
		SvModal,
		SvQandA
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
	}
}
</script>

<style lang="stylus" scoped>
@import "../../../stylus/_variables.styl"
// .window を読み込む
@import "../../../stylus/_extend.styl"

footer
	text-align center
	margin-top 8px
	padding 4px
	
.btn-darker
	background-color _light-accent
</style>
