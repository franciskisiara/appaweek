<script setup lang="ts">
import BaseLogo from '@/components/BaseLogo.vue'
import { useAppStore } from '@/stores/AppStore'
import HeaderProfile from '@/components/HeaderProfile.vue'
import TheNotificationMenu from '@/components/TheNotificationMenu.vue'

const appStore = useAppStore()
</script>

<template>
    <q-header
        bordered
        class="bg-white text-black"
    >
        <q-toolbar class="q-px-none">
            <div
                class="row justify-between items-center q-px-sm"
                style="height: 50px; width:300px; border-right: 1px solid #e0e0e0"
            >
                <div class="col-auto">
                    <BaseLogo small />
                </div>

                <div class="col-auto">
                    <q-btn
                        flat
                        round
                        size="sm"
                        icon="mdi-menu"
                        class="no-margin text-black"
                        @click="appStore.toggleDrawer()"
                    />
                </div>
            </div>

            <q-space/>

            <div>
                <TheNotificationMenu />

                <HeaderProfile />
            </div>
        </q-toolbar>
    </q-header>
</template>

<style lang="scss" scoped>
.selection {
    color: red !important;

    .q-field__native {
        color: red !important;
    }
}
</style>
