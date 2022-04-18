import {API} from "./index";
import {ICatalogItems} from "../models/catalogItems";

const pageSize = 10

export default class CatalogAPI {
    static async getItems(page: number) {
        return API.post<ICatalogItems>('product/search', {page, pageSize:2})
    }
}