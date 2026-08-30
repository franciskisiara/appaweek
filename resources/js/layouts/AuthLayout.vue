<script lang="ts" setup>
import { Head, Link } from '@inertiajs/vue3'
import BaseLogo from '@/components/BaseLogo.vue'

type AuthLayoutProps = {
    cta?: string,
    title?: string,
    ctaUrl?: string,
    prompt?: string,
    heading?: string,
    noPadding?: boolean,
    buttonLabel?: string,
    processing?: boolean,
    submit?: () => void,
}

const props = withDefaults(defineProps<AuthLayoutProps>(), {
    cta: '',
    title: '',
    ctaUrl: '',
    prompt: '',
    heading: '',
    buttonLabel: '',
    noPadding: false,
    processing: false,
})
</script>

<template>
    <q-layout view="lHh Lpr lff">
        <q-header class="bg-white" bordered>
            <q-toolbar>
                <div class="full-width row justify-center">
                    <BaseLogo />
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <q-page>
                <div
                    class="row flex-center"
                    style="height: calc(100vh - 51px);"
                >
                    <div
                        class="col-12 col-md-5 col-lg-4"
                        style="max-width: 400px"
                    >
                        <q-card flat bordered>
                            <q-card-section class="q-py-xl">
                                <Head :title="props.title"></Head>

                                <div class="q-pt-md q-pb-xs">
                                    <h2
                                        class="text-weight-medium text-h5 text-center no-margin"
                                        style="color: #333 !important;"
                                    >
                                        {{ props.heading }}
                                    </h2>
                                </div>

                                <q-card flat>
                                    <q-card-section :class="props.noPadding ? 'q-px-none' : 'q-px-lg'">
                                        <slot></slot>
                                        <q-btn
                                            v-if="props.buttonLabel"
                                            :disable="props.processing"
                                            :loading="props.processing"
                                            :unelevated="props.processing"
                                            class="full-width text-caption text-weight-bold q-mt-md"
                                            color="primary"
                                            padding="10px 20px"
                                            @click="props.submit"
                                        >
                                            {{ props.buttonLabel }}
                                        </q-btn>
                                    </q-card-section>
                                </q-card>

                                <div class="q-pt-xs q-pb-md text-center">
                                    {{ props.prompt }}
                                    <Link
                                        :href="`/${props.ctaUrl}`"
                                        class="no-underline text-secondary text-weight-medium"
                                    >
                                        {{ props.cta }}
                                    </Link>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
