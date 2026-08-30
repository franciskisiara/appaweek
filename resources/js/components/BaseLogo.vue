<script lang="ts" setup>
import { Link } from '@inertiajs/vue3'

const props = defineProps<{
    small?: boolean,
}>()
</script>

<template>
    <Link
        href="/"
        class="row items-center no-decoration"
    >
        <q-avatar
            square
            :size="props.small ? '28px' : '36px'"
        >
            <img src="/images/logo.png" />
        </q-avatar>

        <div
            class="text-h6 text-primary q-pl-sm"
            :class="props.small ? 'text-body2' : 'text-h6'"
            style="font-family: Montserrat; font-weight: 700; letter-spacing: 0px; margin-top: 2px;"
        >
            App a Week
        </div>
    </Link>
</template>
