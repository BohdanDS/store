import {API, API_Auth} from "./index";
import {ICatalogItems, IItem, TItem} from "../models/catalogItems";


export default class CatalogAPI {
    static async getItems(page: number) {
        return API.post<ICatalogItems>('product/search', {page, pageSize: 5})
    }

    static async getItemByID(id: number) {
        return API.get(`/product/${id}`)
    }

    static async createItem(ItemData: Pick<ReturnType<(article: TItem) => { type: "[CATALOG] START_CREATE_NEW_ARTICLE"; article: Omit<Omit<IItem, "categories">, "id"> & { categories: { id: number }[] } }>, "article">) {
        return API_Auth.post('/product', {...ItemData})
    }

    static async removeItem(itemId: number) {
        return API_Auth.delete(`/product/${itemId}`)
    }
}