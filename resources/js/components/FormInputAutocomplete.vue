<script lang="ts" setup generic="T">
import { useHttp } from '@inertiajs/vue3'
import { omit } from 'lodash'
import { computed, ref, watch } from 'vue'
import FormControl from '@/components/FormControl.vue'
import type { FormInput, Paginated, SelectOption } from '@/types/common'
import { mapper } from '@/lib/function_mappers'

const props = defineProps<{
    value?: T,
    url?: string,
    hint?: string,
    label?: string,
    property: string,
    filled?: boolean,
    square?: boolean,
    select?: boolean,
    disable?: boolean,
    multiple?: boolean,
    required?: boolean,
    clearable?: boolean,
    errorMessage?: string,
    hideBottomSpace?: boolean,
    params?: Record<string, any>,
}>()

const emits = defineEmits(['option-selected'])

const http: Record<string, any> = useHttp({
    ...omit(route().queryParams, ['search']),
    ...(props.params || {}),
    search: '',
})

const modelValue = defineModel<FormInput>()

const editable = computed(() => props.value ? mapper<T>(props.property)([props.value]) : [])
const options = ref<SelectOption<T>[]>([])
const selectedOption = ref(editable.value.shift())
const contentSize = ref()

const filterFn = (search: string, update: any) => {
    http.search = search

    if (props.params) {
        Object.keys(props.params).forEach((key) => {
            http[key] = props.params?.[key]
        })
    }

    update(() => {
        http.get(props.url || `/${props.property}`, {
            onSuccess: (data: any) => {
                options.value = mapper<T>(props.property)((data as Paginated<T>).data)
                contentSize.value = options.value.length > 5 ? 300 : options.value.length * 50
            }
        })
    })
}

watch(() => selectedOption.value, (n) => {
    modelValue.value = n?.value
    emits('option-selected', n)
})
</script>

<template>
    <FormControl
        :label="props.label"
        :required="props.required"
    >
        <q-select
            dense
            outlined
            use-input
            fill-input
            bottom-slots
            no-error-icon
            hide-selected
            behavior="menu"
            :hint="props.hint"
            :options="options"
            input-debounce="500"
            :square="props.square"
            :filled="props.filled"
            clear-icon="mdi-close"
            v-model="selectedOption"
            :disable="props.disable"
            :multiple="props.multiple"
            :use-chips="props.multiple"
            :clearable="props.clearable"
            :error="!!props.errorMessage"
            :error-message="props.errorMessage"
            :hide-dropdown-icon="!props.select"
            :popup-content-style="`height: ${contentSize}px;`"
            :hide-bottom-space="Boolean(props.hint) || Boolean(props.errorMessage) || props.hideBottomSpace"
            @filter="filterFn"
        >
            <template v-slot:append v-if="!props.select">
                <q-icon
                    size="xs"
                    name="mdi-magnify"
                    @click.stop.prevent
                />
            </template>

            <template v-slot:no-option>
                <q-item>
                    <q-item-section class="text-grey">
                        <div v-if="http.processing" class="row flex-center">
                            Searching
                            <q-spinner-dots
                                size="sm"
                                color="accent"
                                class="q-ml-sm"
                            />
                        </div>
                        <span v-else>
                            No results
                        </span>
                    </q-item-section>
                </q-item>
            </template>

            <template v-slot:option="scope">
                <div>
                    <q-item v-bind="scope.itemProps">
                        <q-item-section
                            v-if="scope.opt.avatar"
                            avatar
                        >
                            <q-avatar square size="md">
                                <q-img
                                    no-spinner
                                    :src="scope.opt.avatar"
                                />
                            </q-avatar>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label lines="2" class="text-caption" style="letter-spacing: 0;">
                                {{ scope.opt.label }}
                            </q-item-label>

                            <q-item-label caption v-if="scope.opt.caption">
                                {{ scope.opt.caption }}
                            </q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator
                        v-if="scope.index < options.length - 1"
                        inset
                    ></q-separator>
                </div>
            </template>
        </q-select>
    </FormControl>
</template>
