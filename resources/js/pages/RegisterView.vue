<script lang="ts" setup>
import { setLayoutProps, useForm } from '@inertiajs/vue3'
import { useQuasar } from 'quasar'
import { watch } from 'vue'
import FormInputText from '@/components/FormInputText.vue'

const $q = useQuasar()
const form = useForm({
    name: '',
    email: '',
    password: '',
})

setLayoutProps({
    title: 'Register',
    heading: 'Create Account',
    buttonLabel: 'Create Account',
    prompt: "Already have an account?",
    cta: "Sign in",
    ctaUrl: "login",
    processing: form.processing,
    submit: () => {
        form.post(route('register'), {
        onSuccess: () => {
            $q.notify({
                message: 'Account registered successfully. Please verify your email to proceed.'
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
    <div>
        <FormInputText
            required
            label="Name"
            v-model="form.name"
            :error-message="form.errors.name"
            @update:model-value="form.clearErrors('name')"
        ></FormInputText>

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
        ></FormInputText>
    </div>
</template>

