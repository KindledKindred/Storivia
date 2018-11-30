<template lang="pug">
div
	SvHomeNavigation
	.row.contents_wrapper
		.col-md-6.contents
			img.contents_img_l(src="../../../images/bg.png")
			h2.contents_header NEW PROJECT
			//- 現在はNEW PROJECTを作成せず/workspaceへ向かう
			router-link.btn.btn-primary(tag="button" to="/action") New Project
		.col-md-6.contents
			img.contents_img_l(src="../../../images/bg.png")
			h2.contents_header OPEN PROJECT
			//- 現在はファイルを読み込むだけで一切の処理は行わない
			label
				span.btn.btn-primary Open Project
					input(type="file" style="display:none")
</template>

<script>
import SvHomeNavigation from '../Molecules/SvHomeNavigation'

export default {
	name: 'SvWorkspaceView',

	components: {
		SvHomeNavigation
	}
}
</script>

<style lang="stylus" scoped>
@import "../../../stylus/_variables.styl"

.contents_wrapper
	padding 4vh 4vw
.contents
	padding-bottom 4vh
	&_header
		margin-top 4vh
	&_img_l
		max-width 90%
		height auto

.btn
	margin-top 2vh 
</style>

