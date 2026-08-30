import type { Notification, Payment, User } from '@/types/models'

export type AppPageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    name: string;
    auth: {
        user: User;
        notifications: [],
    };
};
