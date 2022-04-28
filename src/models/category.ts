export interface ICategory {
    id: number,
    title: string
}
export type TCategory =  Omit<ICategory, 'title'>