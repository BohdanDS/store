import {ICategory} from "./category";

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
    img: any,
    price: number
    categories: ICategory[]
}