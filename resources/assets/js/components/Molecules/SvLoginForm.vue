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
