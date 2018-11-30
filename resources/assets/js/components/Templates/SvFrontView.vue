<template lang="pug">
div#front-view
	.top-header
		h1.site-title STORIVIA
		p.site-description support for plot writting
		router-link.button.btn.btn-primary(tag="button" to="/workspace") Workspace
</template>

<script>
export default {
	name: 'SvFrontViewWindow',

	components: {
	}
}
</script>

<style lang="stylus" scoped>
/* ！scopedの注意点！
 * scopedされたstyleはgrobalを汚染しない
 * そのため子コンポーネントに漏れることもない
 * 必要ならば >>> または |deep| を用いる（未検証）
 */
@import "../../../stylus/_variables.styl"

#front-view
  text-align center
.top-header
  height 64vh
  padding 16vh
  background-color _background-color
.site-title
  font-size 8vw
  color _white
.site-description
  font-size 2vw
.button
  margin 2vw
  font-size 2vw
</style>
