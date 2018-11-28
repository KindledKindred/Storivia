<template lang="pug">
#action
	SvWindowHeader Action
	SvActionPanel
	
</template>

<script>
import SvWindowHeader from '../Molecules/SvWindowHeader'
import SvActionPanel from '../Molecules/SvActionPanel'

export default {
	name: 'SvActionWindow',

	components: {
		SvWindowHeader,
		SvActionPanel
	}
}
</script>

<style lang="stylus" scoped>
</style>
