<template lang="pug">
    SvModal
        header(slot="header")
        body(slot="body")
            SvLoginForm
        footer(slot="footer")
</template>

<script>
import SvModal from '../Templates/SvModal.vue'
import SvLoginForm from '../Molecules/SvLoginForm.vue'

export default {
    name: 'SvLoginModal',

    components: {
        SvModal,
        SvLoginForm
    },

    props: {
        onlogin: {
            type: Function,
            required: true
        }
    },
}
</script>
