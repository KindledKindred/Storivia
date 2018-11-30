<template lang="pug">
nav.navbar.navbar-default.navbar-fixed-top
	.container-fluid
		.navbar-header
			router-link.navbar-brand(to="/") STORIVIA
			//- data-targetを表示するハンバーガーアイコン．-for不可
			button.navbar-toggle.collapsed(data-toggle="collapse" data-target="#nav-plot")
					span.icon-bar
					span.icon-bar
					span.icon-bar
		#nav-plot.collapse.navbar-collapse
			//- 左側のリスト
			ul.nav.navbar-nav
				li
					router-link(to="/action") Action
				li
					router-link(to="/character") Character
				li
					router-link(to="/world") World
			//- 右側のリスト
			ul.nav.navbar-nav.navbar-right
				li.nav-item
					router-link.nav-link(to="/") Logout
</template>

<script>
export default {
	name: 'SvPlotNavigation'
}
</script>
