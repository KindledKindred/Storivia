<template lang="pug">
textarea.form-control(rows="5" v-model="note" @input="updateNote" placeholder="メモ")#note.window {{ note }}
	//-textarea.form-control(rows="5" v-model="note" placeholder="自由にメモを取ることができます")
	
</template>

<script>
import { mapState, mapGetters, mapActions }  from 'vuex'

export default {
	name: 'SvNoteWindow',

	components: {
	},

	computed: {
		...mapState(['note']),

		note: {
			get () {
				return this.$store.state.note
			},
			set (value) {
				this.$store.commit('updateNote', value)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "../../../stylus/_variables.styl"
// .windowを読み込む
@import "../../../stylus/_extend.styl"

textarea
	border none
	color _light-shades
</style>
