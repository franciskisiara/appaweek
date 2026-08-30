<script lang="ts" setup>
import { router } from '@inertiajs/vue3'
import { useNavStore } from '@/stores/NavStore'
import type { NavGroup } from '@/types/common'

const props = defineProps<{
    navGroup: NavGroup[]
}>()

const navStore = useNavStore()
</script>

<template>
    <q-list style="min-height: 600px !important">
        <template
            v-for="(group, index) in props.navGroup"
            :key="`sidebar-nav-group-${index}`"
        >
            <q-item-label
                v-if="group.title"
                header
                class="text-grey-9"
            >
                {{ group.title }}
            </q-item-label>

            <q-item
                v-for="(link, index) in group.links"
                :key="`nav-link-${index}`"
                dense
                clickable
                v-close-popup
                class="cursor-pointer text-black"
                :class="{
                    'app-active--link': navStore.isActiveLink(link.name)
                }"
                @click="router.get(route(link.name))"
            >
                <q-item-section side>
                    <q-icon
                        size="xs"
                        :name="`mdi-${link.icon}`"
                        :class="{
                            'text-primary': navStore.isActiveLink(link.name)
                        }"
                    />
                </q-item-section>

                <q-item-section>
                    <q-item-label>
                        {{ link.label }}
                    </q-item-label>
                </q-item-section>
            </q-item>
        </template>
    </q-list>
</template>
