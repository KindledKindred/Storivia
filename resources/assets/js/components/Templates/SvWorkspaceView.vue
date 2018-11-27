<template lang="pug">
div
	SvHomeNavigation
	.row
		.col-md-6
			img(src="../../../images/bg.png")
			h2 NEW PROJECT
			router-link(tag="button" to="/action") Open
		.col-md-6
			img(src="../../../images/bg.png")
			h2 RECENTRY PROJECT
			p 現在１つのアカウントで１つのプロジェクトのみ参加できます．
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
