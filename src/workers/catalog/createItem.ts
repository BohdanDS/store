import CatalogAPI from "../../api/catalog";
import {CreateNewArticle} from "../../store/reducers/catalog/actions";

export function* createItem(payload: ReturnType<typeof CreateNewArticle>) {
    console.log(payload)
    const {type, ...itemData} = payload
    console.log('itemData', itemData)
    try {
        const {data} = yield CatalogAPI.createItem(itemData)
        console.log(data)
    } catch (e) {

    }

}