<template lang="pug">
div#front-view
	.top-header
		h1.site-title STORIVIA
		p.site-description support for plot writting
		div.buttons
			router-link(tag="button" to="/workspace") Workspace
</template>

<script>
</script>

<style lang="stylus">
@import "../../../stylus/_variables.styl"

#front-view
  text-align center
.top-header
  height 64vh
  padding 16vh
  background-color _background-color
.site-title
  font-size 8vw
.site-description
  font-size 4vw
.buttons
  padding 2vw
  font-size 2rem
</style>
