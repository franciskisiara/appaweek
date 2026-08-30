import { defineStore } from 'pinia'

type StoreShape = {
    drawer: boolean,
}

export const useAppStore = defineStore('AppStore', {
    state: (): StoreShape => ({
        drawer: true,
    }),

    getters: {
        showDrawer: (state) => state.drawer
    },

    actions: {
        toggleDrawer() {
            this.drawer = !this.drawer
        },
    },
})
