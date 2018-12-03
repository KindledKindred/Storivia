<template lang="pug">
textarea.form-control(rows="5" v-model="note" placeholder="メモ欄")#note.window
	//-textarea.form-control(rows="5" v-model="note" placeholder="自由にメモを取ることができます")
	
</template>

<script>
export default {
	name: 'SvNoteWindow',

	components: {
	}
}
</script>

<style lang="stylus" scoped>
@import "../../../stylus/_variables.styl"
// .windowを読み込む
@import "../../../stylus/_extend.styl"
</style>
