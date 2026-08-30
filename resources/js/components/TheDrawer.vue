<script lang="ts" setup>
import { computed } from 'vue'
import BaseNavigation from '@/components/BaseNavigation.vue'
import { useAppStore } from '@/stores/AppStore'

const appStore = useAppStore()

const drawerWidth = computed(() => {
    return appStore.showDrawer ? 300 : 0
})

const navGroup = [
    {
        title: 'Application Analytics',
        links: [
            {
                label: 'Dashboard',
                icon: 'chart-bar',
                name: 'dashboard',
            },
        ],
    },
]
</script>

<template>
    <q-drawer
        bordered
        show-if-above
        :breakpoint="700"
        :width="drawerWidth"
        :model-value="appStore.showDrawer"
    >
        <div class="column full-height">
            <div class="col q-px-none">
                <BaseNavigation
                    :nav-group="navGroup"
                ></BaseNavigation>
            </div>
        </div>
    </q-drawer>
</template>
