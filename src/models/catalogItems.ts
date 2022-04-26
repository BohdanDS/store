import {ICategory, TCategory} from "./category";

export interface ICatalogItems {
    totalCount: number
    page: number
    pageSize: number
    content: IItem[]
    filterData: {
        searchString: string
        category: [number]
        price: [number]
    }
}

export interface IItem {
    id: number
    title: string,
    img: string,
    price: number
    categories: ICategory[]
}

export type TItem = Omit<Omit<IItem, 'categories'>, 'id'> & { categories: TCategory[] }
const i:TItem={
    title:'1',
    img:'',
    price:10,
    categories:[{id:1}]
}