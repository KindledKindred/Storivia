<template lang="pug">
.panel
	row
		.panel_item.col-md-3
			i.glyphicon.glyphicon-user
			slot(name="character_name")
		.panel_item.col-md-3
			i.fas.fa-users-cog
			slot(name="role_name")
		.panel_item.col-md-2
			i.glyphicon.glyphicon-leaf
			slot(name="character_age")
		.panel_item.col-md-2
			i.fas.fa-restroom
			slot(name="character_sex")
		.panel_interface.col-md-2
			i.edit.glyphicon.glyphicon-edit
			i.remove.glyphicon.glyphicon-remove
</template>

<script>
import SvActionPanel from '../Molecules/SvActionPanel'
import SvModal from '../Templates/SvModal'
import * as types from '../../store/mutation-types';
import { mapState, mapGetters, mapActions }  from 'vuex'

export default {
	name: 'SvCharacterPanel'
}
</script>

<style lang="stylus">
@import "../../../stylus/_variables.styl"
// .panelを読み込む
@import "../../../stylus/_extend.styl"
</style>