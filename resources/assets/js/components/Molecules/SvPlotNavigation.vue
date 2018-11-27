<template lang="pug">
nav.navbar.navbar-default
	.container-fluid
		navbar-header
			button.navbar-toggle.collapsed(data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar")
				span.sr-only Toggle Navigation
				span.icon-bar
				span.icon-bar
				span.icon-bar
			router-link.navbar-brand(to="/") STORIVIA

		#navbar.navbar-collapse.collapse
			ul.nav.navbar-nav
				router-link(tag="li" to="/action") Action
				router-link(tag="li" to="/character") Character
				router-link(tag="li" to="/world") World
</template>

<script>
export default {
	name: 'SvPlotNavigation'
}
</script>