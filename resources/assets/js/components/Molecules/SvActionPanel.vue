<template lang="pug">
.panel
	row
		.function_name {{ function31_name }}
		.world_name {{ worldPanel_name }}
		.world_light {{ worldPanel_light }}
		.scene_sound {{ worldPanel_sound }}
	row
		.action_actior {{ character_name }}
		.action_motive {{ action_motive }}
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
			'function31s'
			]),

		...mapGetters([
			'getCharacterById',
			'getWorldPanelById',
			'getFunction31ById'
		]),

		function31_name : {
			get() {
				return getFunction31ById(function31_id).name
			}
		}
	} 
}
</script>
