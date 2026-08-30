<script lang="ts" setup>
import { Head } from '@inertiajs/vue3'
import ThePageHeader from '@/components/ThePageHeader.vue'
import type { Crumb } from '@/types/common'

const props = defineProps<{
    title: string,
    heading?: string,
    noPadding?: boolean,
    noHeaderPadding?: boolean,
    breadcrumbs?: Crumb[],
}>()
</script>

<template>
    <div class="column" style="min-height: max(720px, calc(100vh - 52px));">
        <Head :title="props.title"></Head>

        <q-card flat class="col column full-height no-border-radius bg-transparent">
            <q-card-section
                class="col-auto q-py-sm"
                :class="!props.noHeaderPadding ? 'q-px-md' : 'q-px-none'"
            >
                <slot name="heading">
                    <ThePageHeader
                        :heading="props.heading"
                        :breadcrumbs="props.breadcrumbs"
                    >
                        <template #actions>
                            <slot name="actions"></slot>
                        </template>
                    </ThePageHeader>
                </slot>
            </q-card-section>

            <q-card-section
                class="col column q-pt-none"
                :class="{
                    'no-padding': props.noPadding
                }"
            >
                <slot name="content"></slot>
            </q-card-section>
        </q-card>
    </div>
</template>
