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
