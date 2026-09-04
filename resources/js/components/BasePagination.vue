<script lang="ts" setup>
import { ref } from 'vue'
import type { Metadata } from "@/types/common"

const props = defineProps<{
    meta: Metadata
}>()

const emits = defineEmits([
    'goTo',
])

const currentPage = ref(props.meta.current_page)

const goTo = (page: number) => {
    currentPage.value = page
    emits('goTo', page)
}
</script>

<template>
    <div class="q-pt-md q-pb-sm flex flex-center column">
        <q-pagination
            :max="props.meta.last_page"
            :max-pages="5"
            :model-value="currentPage"
            active-design="unelevated"
            icon-next="mdi-chevron-right"
            icon-prev="mdi-chevron-left"
            @update:model-value="goTo"
        />
    </div>
</template>
