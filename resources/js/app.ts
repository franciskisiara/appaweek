import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia } from 'pinia'
import * as components from 'quasar'
import { Dialog, Notify, Quasar } from 'quasar'
import iconSet from 'quasar/icon-set/mdi-v7.js'
import { ZiggyVue } from 'ziggy-js'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import 'quasar/src/css/index.sass'
import '../css/sass/app.scss'

import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'
const pinia = createPinia()

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        if ([
            'ForgotPasswordView',
            'LoginView',
            'PasswordResetView',
            'RegisterView',
            'VerifyEmailView'
        ].includes(name)) {
            return AuthLayout
        } else {
            return AppLayout;
        }
    },
    withApp(app) {
        app.use(ZiggyVue)
            .use(pinia)
            .use(Quasar, {
                components,
                iconSet,
                plugins: {
                    Dialog,
                    Notify,
                },
                config: {
                    // dark: true,
                    notify: {
                        timeout: 4000,
                        position: 'top',
                        color: 'positive',
                        badgeStyle: 'opacity: 0',
                        icon: 'mdi-check-circle-outline',
                    }
                },
            })
    },
    progress: {
        color: '#4B5563',
    },
});
