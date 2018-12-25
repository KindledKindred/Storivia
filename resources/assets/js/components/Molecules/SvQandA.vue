<template lang="pug">
.panel-group#accordion
  .panel.panel-default(v-for="QandA in QandAs" :key="QandA.id")
    button.btn-panel-heading(data-toggle="collapse" data-parent="#accordion" :href="QandA.id_href") {{ QandA.question }}
    .panel-collapse.collapse(:id="QandA.id_html")
      .panel-body
        p {{ QandA.answer }}
</template>

<script>
import { mapState, mapGetters, mapActions }  from 'vuex'

export default {
  name: 'SvQnadA',

  computed: {
		...mapState([
			'QandAs'
		])
	}
}
</script>

<style lang="stylus" scoped>
@import "../../../stylus/_variables.styl"
// .window を読み込む
@import "../../../stylus/_extend.styl"

#accrodion:hover
  padding 0

.panel
  padding 0

.btn-panel-heading
  border none
  width 100%
  height 100%
  min-width 60vw
  max-width 60vw
  padding 8px
  text-align left
  background-color _light-shades
  &:hover // ホバー時は文字色と背景色を入れ替えやや透明に
    background-color _dark-shades
    color _light-shades
    opacity .8
    transition all .15s

.panel-collapse
  min-width 60vw
  max-width 60vw

.accordion-toggle a:after
  content "\e113"
  float right
  color inherit

.accordion-toggle a.collapsed:after
  content "\e114"
  float right
  color inherit
</style>

