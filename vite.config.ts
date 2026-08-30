import inertia from '@inertiajs/vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'
import { quasar } from '@quasar/vite-plugin'
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            refresh: true,
        }),
        inertia({
            ssr: false,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        quasar({
            sassVariables: '/resources/css/sass/quasar-variables.sass'
        })
    ],
    server: {
        watch: {
            ignored: [
                '**/.agents/**',
                '**/.claude/**',
                '**/.cursor/**',
                '**/.junie/**',
                '**/vendor/**',
            ],
        },
    },
    resolve: {
        alias: {
            'ziggy-js': path.resolve(import.meta.dirname, 'vendor/tightenco/ziggy'),
        },
    },
});
