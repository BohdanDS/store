import {API} from "./index";
import {ICatalogItems} from "../models/catalogItems";


export default class CatalogAPI {
    static async getItems(page: number) {
        return API.post<ICatalogItems>('product/search', {page, pageSize: 1})
    }
}