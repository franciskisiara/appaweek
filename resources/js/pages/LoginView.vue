<script lang="ts" setup>
import { Link, router, setLayoutProps, useForm } from '@inertiajs/vue3'
import { useQuasar } from 'quasar'
import { watch } from 'vue'
import FormInputText from '@/components/FormInputText.vue'

const $q = useQuasar()
const form = useForm({
    email: '',
    password: '',
})

setLayoutProps({
    title: 'Login',
    heading: 'Log In',
    buttonLabel: 'Sign In',
    prompt: 'Don\'t have an account?',
    cta: 'Create an account',
    ctaUrl: 'register',
    noPadding: false,
    processing: form.processing,
    submit: () => {
        form.post(route('authenticate'), {
            onSuccess: () => {
                $q.notify({
                    message: 'Logged in successfully!',
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

    <FormInputText
        required
        type="password"
        label="Password"
        v-model="form.password"
        :error-message="form.errors.password"
        @update:model-value="form.clearErrors('password')"
    >
        <template #hint>
            <Link
                class="app--link text-caption"
                href="/forgot-password"
            >
                Forgot password?
            </Link>
        </template>
    </FormInputText>
</template>

