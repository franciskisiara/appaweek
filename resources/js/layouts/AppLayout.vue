<script lang="ts" setup>
import { router } from '@inertiajs/vue3'
import TheDrawer from '@/components/TheDrawer.vue'
import TheHeader from '@/components/TheHeader.vue'
import { useNavStore } from '@/stores/NavStore'

const navStore = useNavStore()

router.on('navigate', () => {
    navStore.setCurrentRoute()
})
</script>

<template>
    <q-layout view="hHh Lpr lff">
        <TheHeader />

        <TheDrawer />

        <q-page-container>
            <q-page style="background-color: #f0f1f5">
                <slot></slot>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
