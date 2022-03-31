export type TFells = {
    label?:string
    value:string
    name: string,
    placeholder?: string,
    control?:string
    type?:string
    handle?:Function
}

export type TInput = Required<Omit<TFells, 'placeholder'>>

export enum ORDER_STATUSES {
    ORDER_IN_PROGRESS = 'In Progress',
    ORDER_PAID = 'Paid',
    ORDER_ON_THE_WAY = 'on The Way',
    ORDER_FINISHED = 'Finished'
}
