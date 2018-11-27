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
			ul.nav.navbar-nav.navbar-right
				router-link(tag="li" to="/") Logout
</template>

<script>
export default {
	name: 'SvHomeNavigation'
}
</script>
