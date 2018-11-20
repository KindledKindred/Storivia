<template lang="pug">
    form(novalidate)
        .form-item
            lavel(for="email") メールアドレス
            input(
                id="email"
                v-model="email"
                type="text"
                autocomplete="off"
                placeholder="example@domain.com"
                @focus="resetError")
            ul.validation-errors
                li(v-if="!validation.email.format") メールアドレスの形式が不正です
                li(v-if="!validation.email.required") メールアドレスが入力されていません
        .form-item
            label(for="password") パスワード
            input(
                id="password"
                v-model="password"
                type="password"
                autocomplete="off"
                placeholder="password"
                @focus="resetError"
            )
            ul.validation-errors
                li(v-if="validation.password.required") パスワードが未入力です
        .form-actions
            SvButton(:disabled="disableLoginAction" @click="handleClick") ログイン
            p.login-progress(v-if="progress") ログイン中．．．
            p.login-error(v-if="error") @{{ error }}
</template>

<script>
import SvButton from '@/components/Atoms/SvButton'

const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const required = val => !!val.trim()

export default {
    name: 'SvLoginFrom',

    components: {
        SvButton
    },

    props: {
        onlogin: {
            type: Funcion,
            required: true
        }
    },

    data () {
        return {
            email: '',
            password: '',
            progress: false,
            erroer: ''
        }
    },

    valid () {
        const validation = this.validation
        const fields = Object.keys(validation)
        let valid = true
        for (let i; i < fields.length; i++) {
            const field = fields[i]
            valid = Object.keys(validation[field])
                .every(key => validation[field][key])
            if (!valid) {
                break
            }
        }
        return valid
    },

    disableLoginAction () {
        return !this.valid || this.progress
    },

    methods: {
        resetError () {
            this.error = ''
        },

        handleClick (ev) {
            if (this.disableLoginAction) { return } //不備があるとログインを実行しない

            this.progress = true //ログイン処理実行中
            this.error = ''

            this.$nextTick =(() => {
                this.onlogin({ email: this.email, password: this.password })
                    .catch(err => {
                        this.error = err.message
                    })
                    .then(() => {
                        this.progress = false
                    })
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
form
    display block
    margin 0 auto 
    text-align left 

label
    display block

input
    width 100%
    padding .5em
    font inherit 

ul
    list-style-type none 
    padding 0
    margin .25em 0
    li
        font-size .5em

.validation-errors
    height 32px

.form-actions p
    font-size .5em
</style>

