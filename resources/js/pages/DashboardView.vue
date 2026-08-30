<script lang="ts" setup>
import { usePage } from '@inertiajs/vue3'
import BasePage from '@/components/BasePage.vue'
import type { AppPageProps } from '@/types'

const page = usePage<AppPageProps>()
</script>

<template>
    <BasePage
        title="Dashboard"
        heading="Dashboard"
        :breadcrumbs="[]"
    >
        <template #content>
            <h2 class="no-margin text-h5 text-weight-medium">
                Welcome, {{ page.props.auth.user.name }}
            </h2>
        </template>
    </BasePage>
</template>
