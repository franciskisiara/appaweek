<script lang="ts" setup>
import { computed, ref } from 'vue'
import FormControl from '@/components/FormControl.vue'

const props = defineProps<{
    label?: string,
    hint?: string,
    step?: string,
    prefix?: string,
    large?: boolean,
    suffix?: string,
    disable?: boolean,
    debounce?: string,
    required?: boolean,
    placeholder?: string,
    errorMessage?: string,
    type?: 'text' | 'email' | 'number' | 'password' | 'textarea',
}>()

const emits = defineEmits(['blur'])

const modelValue = defineModel<any>()
const hideBottomSpace = computed(() => Boolean(props.hint) || Boolean(props.errorMessage))

const inputType = ref(props.type)
</script>

<template>
    <FormControl
        :label="props.label"
        :required="props.required"
    >
        <template #hint>
            <slot name="hint"></slot>
        </template>

        <q-input
            outlined
            bottom-slots
            no-error-icon
            :type="inputType"
            :step="props.step"
            :hint="props.hint"
            :dense="!props.large"
            :prefix="props.prefix"
            :suffix="props.suffix"
            :disable="props.disable"
            :debounce="props.debounce"
            v-model="modelValue"
            :placeholder="props.placeholder"
            :error="!!props.errorMessage"
            :error-message="props.errorMessage"
            :hide-bottom-space="hideBottomSpace"
            @blur="emits('blur')"
        >
            <template
                v-if="props.type == 'password' && Boolean(modelValue)"
                v-slot:append
            >
                <q-btn
                    round
                    unelevated
                    size="sm"
                    tabindex="-1"
                    icon="mdi-eye"
                    @mousedown="inputType = 'text'"
                    @mouseup="inputType = 'password'"
                ></q-btn>
            </template>
        </q-input>
    </FormControl>
</template>
