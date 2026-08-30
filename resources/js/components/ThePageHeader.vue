<script lang="ts" setup>
import { router } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import type { Crumb } from '@/types/common'

const props = defineProps<{
    heading?: string,
    breadcrumbs?: Crumb[],
}>()

const showBreadcrumbs = ref(!! props.breadcrumbs)

const crumbs = computed(() => {
    return [
        { label: 'Dashboard', name: 'dashboard' },
        ...props.breadcrumbs || [],
    ]
})
</script>

<template>
    <div class="row justify-between items-center">
        <div>
            <slot name="heading">
                <h1 class="text-h6 no-padding no-margin">
                    {{ props.heading }}
                </h1>
            </slot>

            <q-breadcrumbs
                v-if="showBreadcrumbs"
                class="text-grey-7 q-mb-xs"
            >
                <template v-slot:separator>
                    <q-icon
                        size="1.5em"
                        color="primary"
                        name="mdi-chevron-right"
                    />
                </template>

                <template v-if="props.breadcrumbs">
                    <q-breadcrumbs-el
                        v-for="(crumb, index) in crumbs"
                        :key="`breadcrumb-${index}`"
                        :label="crumb.label"
                        class="cursor-pointer"
                        @click="crumb.name ? router.get(route(crumb.name, crumb.params)) : ''"
                    ></q-breadcrumbs-el>
                </template>
            </q-breadcrumbs>
        </div>

        <slot name="actions"></slot>
    </div>
</template>
