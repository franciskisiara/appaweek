import { defineStore } from 'pinia'

type StoreShape = {
    currentRoute: string,
}

export const useNavStore = defineStore('NavStore', {
    state: (): StoreShape => ({
        currentRoute: route().current() as string,
    }),

    actions: {
        setCurrentRoute() {
            this.currentRoute = route().current() as string
        },

        isActiveLink(name: string) {
            return name == this.currentRoute
        }
    },
})
