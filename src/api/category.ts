import {API} from "./index";

export default class CategoryAPI {
    static getCategories() {
        return API.get('/category')
    }

    static createCategory(categoryTitle: string) {
        const token = localStorage.getItem('token')
        return API.post('/category', {title: categoryTitle}, {headers: {"Authorization": `Bearer ${token}`}})
    }

    static deleteCategory(categoryId: number) {
        const token = localStorage.getItem('token')
        return API.delete(`/category/${categoryId}`, {headers: {"Authorization": `Bearer ${token}`}})
    }
}