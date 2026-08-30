<script setup lang="ts">
import { router, setLayoutProps, useForm, usePage } from '@inertiajs/vue3'
import { useQuasar } from 'quasar'
import { watch } from 'vue'
import type { AppPageProps } from '@/types'

const page = usePage<AppPageProps>()

const $q = useQuasar()
const form = useForm({})

const sendEmail = () => {
    form.post(route('verification.send'), {
        onSuccess: () => {
            $q.notify({
                message: 'Email verification sent.'
            });
        }
    })
}

setLayoutProps({
    cta: '',
    ctaUrl: '',
    prompt: '',
    buttonLabel: '',
    noPadding: true,
    processing: false,
    title: 'Verify email',
    heading: 'Verify your email address',
})

watch(() => form.processing, () => {
    setLayoutProps({
        processing: form.processing,
    })
})
</script>

<template>
    <q-card flat>
        <q-card-section>
            <div class="q-mb-md text-body2">
                <p>
                    We have sent a verification link to the email address
                    <b class="text-secondary">
                        {{ page.props.auth.user.email }}
                    </b>
                </p>
                <p>Check your inbox and click the verification link to complete the registration process.</p>
            </div>

            <q-btn
                color="primary"
                padding="10px 20px"
                :disable="form.processing"
                :loading="form.processing"
                :unelevated="form.processing"
                class="full-width text-caption text-weight-bold"
                @click="sendEmail"
            >
                Send another email
            </q-btn>
        </q-card-section>

        <q-card-actions class="row justify-center no-margin q-pb-none">
            <q-btn
                flat
                no-caps
                unelevated
                padding="5px 15px"
                class="fade-secondary q-mb-none"
                @click="router.post(route('logout'))"
            >
                Not my email address
            </q-btn>
        </q-card-actions>
    </q-card>
</template>
