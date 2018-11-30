<template lang="pug">
#action.window
	span.window_title Action
	p
		SvActionPanel
	SvButton パネル追加
	
</template>

<script>
import SvActionPanel from '../Molecules/SvActionPanel'

export default {
	name: 'SvActionWindow',

	components: {
		SvActionPanel
	}
}
</script>

<style lang="stylus" scoped>
@import "../../../stylus/_variables.styl"
// .windowを読み込む
@import "../../../stylus/_extend.styl"
</style>

