<template lang="pug">
#note.window
	span.window_title Note
	p note
	
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
