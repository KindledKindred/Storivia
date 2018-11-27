<template lang="pug">
    button(:class="classes" :disabled="disabled" type="button" @click="handleClick")
        slot
</template>

<script>
export default {
    name: 'SvButton',

    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'button'
        }
    },

    computed: {
        //'type'に応じて動的にクラスを生成する
        classes () {
            const cls = this.type === 'text' ? ('-' + this.type) : ''
            return ['sv-button${cls}']
        }
    },

    methods: {
        //'click'イベントを発行
        handleClick (ev) {
            this.$emit('click', ev)
        }
    }
}
</script>

<style lang="stylus" scoped>
.sv-button
    padding .6em 1.3em

.sv-button-text
    border none 
    padding-right 0
    padding-left 0
</style>


