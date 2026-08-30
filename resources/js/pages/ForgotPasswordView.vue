<script lang="ts" setup>
import { setLayoutProps, useForm } from '@inertiajs/vue3'
import { useQuasar } from 'quasar'
import { watch } from 'vue'
import FormInputText from '@/components/FormInputText.vue'

const $q = useQuasar()
const form = useForm({
    email: '',
})

setLayoutProps({
    title: 'Reset password',
    heading: 'Reset Password',
    buttonLabel: 'Send reset link',
    prompt: 'Already have an account?',
    cta: 'Sign in',
    ctaUrl: 'login',
    noPadding: false,
    processing: form.processing,
    submit: () => {
        form.post(route('password.email'), {
            onSuccess: () => {
                form.reset()
                $q.notify({
                    message: 'Verification link sent!',
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
</script>

<template>
    <FormInputText
        required
        type="email"
        label="Email"
        v-model="form.email"
        :error-message="form.errors.email"
        @update:model-value="form.clearErrors('email')"
    ></FormInputText>
</template>

