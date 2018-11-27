<template lang="pug">
div
	svHomeNavigation
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
import svHomeNavigation from '../Molecules/SvHomeNavigation'

export default {
	name: 'SvWorkSpaceView',

	components: {
		svHomeNavigation
	}
}
</script>
