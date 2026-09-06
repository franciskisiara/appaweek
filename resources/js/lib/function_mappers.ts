import type { SelectOption } from '@/types/common'
import type { } from '@/types/models'

type MapperFunction<T> = (collection: T[]) => SelectOption<T>[];

const functionMappers: Record<string, MapperFunction<any>> = {
    // accounts: (accounts: Account[]): SelectOption<Account>[] => {
    //     return accounts.map((account) => ({
    //         label: account.name,
    //         value: account.id,
    //     }))
    // },
}

export const mapper = <T>(functionMapper: string): MapperFunction<T> => {
    return functionMappers[functionMapper];
}
