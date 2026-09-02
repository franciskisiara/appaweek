<script lang="ts" setup>
import { usePage } from '@inertiajs/vue3'
import BasePage from '@/components/BasePage.vue'
import type { AppPageProps } from '@/types'

const page = usePage<AppPageProps>()
</script>

<template>
    <BasePage
        title="Dashboard"
        :heading="`Welcome, ${page.props.auth.user.name}`"
        :breadcrumbs="[]"
    >
        <template #content>
        </template>
    </BasePage>
</template>
