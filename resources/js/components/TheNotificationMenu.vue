<script lang="ts" setup>
import { router, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import type { AppPageProps } from '@/types'

const page = usePage<AppPageProps>()
const notifications = computed(() => page.props.auth.notifications)
</script>

<template>
    <q-btn
        flat
        round
        no-caps
        size="xs"
        unelevated
        class="text-caption text-weight-medium q-mr-xs"
    >
        <q-badge
            v-if="notifications.length > 0"
            rounded
            floating
            size="xs"
            color="negative"
        />

        <q-icon
            size="xs"
            name="mdi-bell-outline"
        ></q-icon>

        <q-menu
            auto-close
            anchor="bottom right"
            self="top right"
            class="shadow-2"
            max-height="400px"
        >
            <div class="col">
                <q-card flat style="width: 400px !important">
                    <q-card-section>
                        Mark all as read
                    </q-card-section>

                    <q-separator></q-separator>

                    <q-card-section class="no-padding">
                        <div
                            v-if="notifications.length == 0"
                            class="text-center q-py-lg"
                        >
                            <p class="no-margin text-subtitle1 text-weight-bold">You are all caught up</p>
                            <p class="no-margin">You have no new notifications at the moment.</p>
                        </div>

                        <q-list v-else separator>
                            <q-item
                                v-for="(notification, index) in notifications"
                                :key="`registrations-${index}`"
                                v-ripple
                                clickable
                                calss="cursor-pointer"
                                @click="router.get(route(notification.data.to, {
                                    notification_id: notification.id,
                                }))"
                            >
                                <q-item-section top avatar>
                                    <q-avatar
                                        size="md"
                                        text-color="white"
                                    >
                                        <img :src="notification.data.avatar || '/images/avatar.png'" />
                                    </q-avatar>
                                </q-item-section>

                                <q-item-section>
                                    <q-item-label class="text-weight-medium">
                                        {{ notification.data.heading }}
                                    </q-item-label>
                                    <q-item-label class="text-caption" lines="2">
                                        {{ notification.data.message }}
                                    </q-item-label>
                                </q-item-section>

                                <q-item-section side>
                                    <q-item-label caption>
                                        {{ notification.data.time }}
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                </q-card>
            </div>
        </q-menu>
    </q-btn>
</template>
