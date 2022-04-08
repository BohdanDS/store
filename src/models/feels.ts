export type TFells = {
    label?: string
    value: string
    name: string,
    placeholder?: string,
    control?: string
    type?: string
    handle?: Function
}

export type TInput = Required<Omit<TFells, 'placeholder'>>

export enum ORDER_STATUSES {
    ALL_ORDERS = 'ALL',
    ORDER_IN_PROGRESS = 'In Progress',
    ORDER_PAID = 'Paid',
    ORDER_ON_THE_WAY = 'on The Way',
    ORDER_FINISHED = 'Finished',
}

export enum USER_STATUSES {
    PUBLIC_STATUS = 'public_user',
    AUTHORIZED_USER = 'authorized_user',
    ADMIN_USER = 'admin_user'
}

export type TFilterState = {
    minPrice: number
    maxPrice: number
    producers: Array<string>
    inMarket: boolean,
    searchQuery: string
}