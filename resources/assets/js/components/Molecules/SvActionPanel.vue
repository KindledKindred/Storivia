<template lang="pug">
.panel
	row
		.panel_item.function31_name.col-md-3
			i.glyphicon.glyphicon-cog
			slot(name="function31_name")
		.panel_item.col-md-5
			i.glyphicon.glyphicon-map-marker
			slot(name="world_panel_name")
		.panel_item.col-md-1
			i.glyphicon.glyphicon-lamp
			slot(name="world_panel_light")
		.panel_item.col-md-1
			i.glyphicon.glyphicon-volume-up
			slot(name="world_panel_sound")
		.panel_interface.col-md-2
			i.edit.glyphicon.glyphicon-edit
			i.remove.glyphicon.glyphicon-remove(@click="DELETE_ACTION(this.actions.indexOf(action))")
	row
		.panel_item.col-md-3
			i.glyphicon.glyphicon-user
			slot(name="character_name")
		.panel_item.col-md-7
			i.glyphicon.glyphicon-comment
			slot(name="action_motive")
</template>

<script>
import SvActionPanel from '../Molecules/SvActionPanel'
import SvModal from '../Templates/SvModal'
import * as types from '../../store/mutation-types';
import { mapState, mapGetters, mapActions }  from 'vuex'

export default {
	name: 'SvActionPanel'
}
</script>

<style lang="stylus">
@import "../../../stylus/_variables.styl"
// .panelを読み込む
@import "../../../stylus/_extend.styl"
</style>
