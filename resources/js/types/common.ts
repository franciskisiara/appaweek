import type { Ref } from "vue"

export type Crumb = {
    label: string,
    name?: string | null,
    params?: Record<string, string>
}

export type CurrencyFormat = {
    numeric: number,
    display: string,
}

export type DateRange = {
    label: string
    value: DateRangeValue
}

export type DateRangeValue = 'day' | 'week' | 'month' | 'custom'

export type FormInput = string | number | FileList | null | undefined

export type LayoutOption = {
    type: 'account' | 'project'
    heading: string
    navigation?: NavLink[]
    activeItemId: Ref<string>,
    currentRoute: Ref<string>,
}

export type Metadata = {
    current_page: number,
    from: number,
    last_page: number,
    links: PaginationLink[],
    path: string,
    per_page: number,
    to: number,
    total: number
}

export type NavGroup = {
    title?: string,
    links?: NavLink[] | (() => Promise<NavLink[]>),
}

export type NavLink = {
    icon: string,
    name: string,
    label: string,
    action?: () => void,
    params?: Record<string, string>,
    links?: NavLink[],
    parent?: string,
    children?: string[],
    requiresPro?: boolean,
    travel?: () => void,
    drawer?: () => NavGroup[],
}

export type Paginated<T> = {
    data: Array<T>,
    links: PaginationLink[]
    meta: Metadata,
}

export type PaginationLink = {
    url: string | null,
    label: string,
    active: boolean,
}

export type Period = {
    label: string,
    value: 'week' | 'month' | 'year'
}

export type Rail = Record<RailName, {
    icon: string,
    label: string,
    route: string,
    children: string[],
    sidebar: string,
}>

export type RailGroup = {
    rail: string,
    groups: NavGroup[],
    header?: Record<string, any>,
}

export type RailName = 'home'

export type SelectOption<T> = {
    label: string,
    caption?: string,
    avatar?: string,
    value: string | number,
    resource?: T,
}

export type Statistic = {
    label: string,
    value: string,
    icon: string,
    color: string,
}

export type StatisticKey = 'expenses' | 'spending' | 'charges' | 'loans'

export type Subscription = {
    countdown: number,
    plan: {
        name: string,
        rank: number,
    },
}
