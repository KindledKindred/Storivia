<template lang="pug">
.panel
	row
		.panel_item.col-md-6
			i.glyphicon.glyphicon-map-marker
			slot(name="worldPanel_name")
		.panel_item.col-md-2
			i.glyphicon.glyphicon-lamp
			slot(name="worldPanel_sound")
		.panel_item.col-md-2
			i.glyphicon.glyphicon-volume-up
			slot(name="worldPanel_light")
		.panel_interface.col-md-2
			i.edit.glyphicon.glyphicon-edit
			i.remove.glyphicon.glyphicon-remove
</template>

<script>
import * as types from '../../store/mutation-types';
import { mapState, mapGetters, mapActions }  from 'vuex'

export default {
	name: 'SvWorldPanel'
}
</script>

<style lang="stylus">
@import "../../../stylus/_variables.styl"
// .panelを読み込む
@import "../../../stylus/_extend.styl"
</style>