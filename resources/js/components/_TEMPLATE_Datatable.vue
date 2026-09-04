<script lang="ts" setup>
import type { QTableColumn } from 'quasar'
import BaseDatatable from '@/components/BaseDatatable.vue'

const columns: QTableColumn[] = [
    {
        label: 'Name',
        name: 'name',
        field: 'name',
        align: 'left',
    },
]
</script>

<template>
    <BaseDatatable
        :metadata="{
            current_page: 1,
            from: 1,
            last_page: 1,
            links: [],
            path: '',
            per_page: 1,
            to: 1,
            total: 1
        }"
    >
        <q-table
            flat
            hide-pagination
            icon
            row-key="name"
            :columns="columns"
            :rows="[]"
            :rows-per-page-options="[0]"
            class="no-border-radius"
            wrap-cells
        >
            <template #body-cell-balance="props">
                <q-td :props="props">

                </q-td>
            </template>
        </q-table>
    </BaseDatatable>
</template>
