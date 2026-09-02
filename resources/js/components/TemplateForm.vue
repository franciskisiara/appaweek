<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { useDialogPluginComponent, useQuasar } from 'quasar'
import BaseDialog from '@/components/BaseDialog.vue'

const { dialogRef, onDialogOK, onDialogCancel } = useDialogPluginComponent()

const $q = useQuasar()
const form = useForm({})

const submit = () => {
    onSuccess()
}

const onSuccess = () => {
    $q.notify({
        message: 'Test template success.'
    })
    onDialogOK()
}
</script>

<template>
    <q-dialog
        persistent
        ref="dialogRef"
    >
        <BaseDialog
            dismissible
            title="Account details"
            :loading="form.processing"
            button-text="Save Account Details"
            @dismiss="onDialogCancel"
            @form:submit="submit"
        >
            <template #content>
                # Content goes here
            </template>
        </BaseDialog>
    </q-dialog>
</template>
