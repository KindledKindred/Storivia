<template lang="pug">
.action_panel.col
	row
		span.col {{ action_function31 }}
		span.col {{ action_actor }}
		span.col {{ action_target }}
	row
		span.col {{ action_motive }}
	row
		span.col {{ action_note }}

</template>

<script>
export default {
	name: 'SvActionPanel',
	
	data () {
		return {
			id: 0,
			action_function31: '',
			action_actor: '',
			action_target: '',
			action_motive: '',
			action_note: ''
		}
	}
}
</script>
