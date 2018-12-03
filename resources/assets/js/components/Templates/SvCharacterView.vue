<template lang="pug">
div
	SvPlotNavigation
	keep-alive.row
		.contents_wrapper
			.col-md-8.contents_main
				SvCharacterWindow
			.col-md-4.contents_sub
				SvNoteWindow
				SvReflectionWindow
</template>

<script>
import SvPlotNavigation from '../Molecules/SvPlotNavigation'
import SvCharacterWindow from '../Organisms/SvCharacterWindow'
import SvNoteWindow from '../Organisms/SvNoteWindow'
import SvReflectionWindow from '../Organisms/SvReflectionWindow'

export default {
	name: 'SvActionView',

	components: {
		SvPlotNavigation,
		SvCharacterWindow,
		SvNoteWindow,
		SvReflectionWindow
	}
}
</script>

<style lang="stylus">
@import "../../../stylus/_variables.styl"
// .contents_wrapper を読み込む
@import "../../../stylus/_extend.styl"
</style>
