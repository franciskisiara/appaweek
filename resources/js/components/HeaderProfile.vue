<script lang="ts" setup>
import { router } from '@inertiajs/vue3'
</script>

<template>
    <q-btn
        flat
        no-caps
        unelevated
        class="no-border-radius no-margin"
        style="height: 50px"
    >
        <q-avatar size="32px">
            <q-img
                src="/images/avatar.png"
                alt="Profile picture"
                no-spinner
            />
        </q-avatar>

        <q-menu
            self="top end"
            anchor="bottom end"
            :offset="[-10, 0]"
            class="cursor-pointer shadow-3"
        >
            <q-list style="min-width: 300px">
                <q-item
                    v-close-popup
                    clickable
                    @click="router.post(route('logout'))"
                >
                    <q-item-section side>
                        <q-icon
                            name="mdi-logout"
                            size="xs"
                        />
                    </q-item-section>

                    <q-item-section>
                        Logout
                    </q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </q-btn>
</template>
