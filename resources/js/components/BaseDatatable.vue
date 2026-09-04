<script lang="ts" setup generic="T">
import { router } from '@inertiajs/vue3'
import type { Metadata } from '@/types/common'
import BasePagination from '@/components/BasePagination.vue'

const props = defineProps<{
    metadata: Metadata
    noPadding?: boolean
    noPagination?: boolean
}>()
</script>

<template>
    <q-card flat bordered>
        <q-card-section
            class="rounded-borders"
            :class="{
                'no-padding': props.noPadding
            }"
        >
            <slot></slot>

            <BasePagination
                v-if="!props.noPagination"
                :meta="props.metadata"
                @goTo="router.reload({
                    data: {
                        page: $event,
                    }
                })"
            />
        </q-card-section>
    </q-card>
</template>
