<script lang="ts" setup>
const props = defineProps<{
    label?: string,
    required?: boolean,
}>()
</script>

<template>
    <div>
        <div v-if="props.label" class="row justify-between q-mb-xs">
            <label class="text-weight-medium">
                {{ props.label }}
                <span v-if="props.required" class="text-negative">*</span>
            </label>

            <slot name="hint"></slot>
        </div>

        <slot></slot>
    </div>
</template>
