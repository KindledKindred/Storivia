<template lang="pug">
.panel
	row
		.function31_name.col-md-5
			slot(name="function31_name")
		.world_panel_name.col-md-5
			slot(name="world_panel_name")
		.world_panel_light.col-md-1
			slot(name="world_panel_light")
		.world_panel_sound.col-md-1
			slot(name="world_panel_sound")
	row
		.character_name.col-md-3
			slot(name="character_name")
		.action_motive.col-md-9
			slot(name="action_motive")
</template>

<script>
import SvActionPanel from '../Molecules/SvActionPanel'
import SvModal from '../Templates/SvModal'
import * as types from '../../store/mutation-types';
import { mapState, mapGetters, mapActions }  from 'vuex'

export default {
	name: 'SvActionPanel',

	computed: {
		...mapState([
			'actions',
			'characters',
			'worldPanels',
			'function31s',
			'nextActionId',
			'nextCharacterId',
			'nextWorldId',
			'nextWorldPanelId',
			]),

		...mapGetters([
			'getCharacterById',
			'getWorldPanelById',
			'getFunction31ById'
		]),
	} 
}
</script>

<style lang="stylus">
@import "../../../stylus/_variables.styl"
// .panelを読み込む
@import "../../../stylus/_extend.styl"
</style>
