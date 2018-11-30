<template lang="pug">
nav.navbar.navbar-default
	.container-fluid
		navbar-header
			router-link.navbar-brand(to="/") STORIVIA
		#navbar.navbar-collapse.collapse
			ul.nav.navbar-nav.navbar-right
				li.nav-item
					router-link.nav-link(to="/") Logout
</template>

<script>
export default {
	name: 'SvHomeNavigation'
}
</script>

<style lang="stylus">
@import "../../../stylus/_variables.styl"

.navbar
	color _white
</style>

