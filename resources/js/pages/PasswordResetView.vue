<script lang="ts" setup>
import { setLayoutProps, useForm } from '@inertiajs/vue3'
import { useQuasar } from 'quasar'
import { watch } from 'vue'
import FormInputText from '@/components/FormInputText.vue'

const { token, email } = route().params
const $q = useQuasar()
const form = useForm({
    email,
    token,
    password: '',
    password_confirmation: '',
})

setLayoutProps({
    title: 'Reset password',
    heading: 'Reset Password',
    buttonLabel: 'Reset Password',
    prompt: 'Already have an account?',
    cta: 'Sign in',
    ctaUrl: 'login',
    noPadding: false,
    processing: form.processing,
    submit: () => {
        form.post(route('password.store'), {
            onSuccess: () => {
                $q.notify({
                    message: 'Password reset successfully!',
                })
            }
        })
    }
})

watch(() => form.processing, () => {
    setLayoutProps({
        processing: form.processing,
    })
})

console.log(route().params, route().routeParams)
</script>

<template>
    <FormInputText
        required
        type="password"
        label="Password"
        v-model="form.password"
        :error-message="form.errors.password"
        @update:model-value="form.clearErrors('password')"
    ></FormInputText>

    <FormInputText
        required
        type="password"
        label="Confirm password"
        v-model="form.password_confirmation"
        :error-message="form.errors.password_confirmation"
        @update:model-value="form.clearErrors('password_confirmation')"
    ></FormInputText>
</template>

