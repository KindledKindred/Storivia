<template lang="pug">
div
	SvPlotNavigation
	keep-alive.row
		.col-md-8
			SvActionWindow
		.col-md-4
			SvNoteWindow
			SvReflrectionWindow
</template>

<script>
import SvPlotNavigation from '../Molecules/SvPlotNavigation'
import SvActionWindow from '../Organisms/SvActionWindow'
import SvNoteWindow from '../Organisms/SvNoteWindow'
import SvReflectionWindow from '../Organisms/SvReflectionWindow'

export default {
	name: 'SvActionView'
}
</script>
