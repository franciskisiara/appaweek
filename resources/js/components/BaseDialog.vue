<script lang="ts" setup>
const props = defineProps<{
    title: string,
    buttonText?: string,
    loading?: boolean,
    dismissible?: boolean,
    width?: string,
    noPadding?: boolean,
    buttonColor?: string,
}>()

const emits = defineEmits([
    'dismiss',
    'form:submit'
])
</script>

<template>
    <q-card
        :style="{
            width: props.width ? `${props.width}px` : '400px'
        }"
    >
        <q-card-section class="q-py-md">
            <div class="row justify-between items-center">
                <span class="text-body1 text-weight-medium">
                    {{ props.title }}
                </span>

                <span
                    v-if="props.dismissible"
                    class="col-auto"
                >
                    <q-btn
                        round
                        flat
                        size="sm"
                        color="negative"
                        icon="mdi-close"
                        @click="emits('dismiss')"
                    ></q-btn>
                </span>
            </div>
        </q-card-section>

        <q-separator></q-separator>

        <q-card-section :class="{
            'no-padding': props.noPadding
        }">
            <slot name="content"></slot>
        </q-card-section>

        <q-card-actions class="q-pa-md" v-if="props.buttonText">
            <q-btn
                padding="md"
                data-test="btn-submit"
                :disable="props.loading"
                :loading="props.loading"
                :unelevated="props.loading"
                :color="props.buttonColor || 'primary'"
                class="full-width text-caption text-weight-bold"
                @click="emits('form:submit')"
            >
                {{ props.buttonText }}
            </q-btn>
        </q-card-actions>
    </q-card>
</template>
