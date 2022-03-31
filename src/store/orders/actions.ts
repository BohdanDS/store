import {OrdersActionType} from "./action-types";
import {OrderStatusType} from "./index";
import {ItemCardType} from "../cart";
import {IOrderForm} from "../../models/interfaces";

export const CreateNewOrder = (id: string, date:string, userEmail:string, status:OrderStatusType, items:ItemCardType, delivery: IOrderForm) =>({
    type: OrdersActionType.CREATE_NEW_ORDER,
    payload: {
        id,
        date,
        userEmail,
        status,
        items,
        delivery
    }
})