import {OrdersActionType} from "./action-types";
import {OrderStatusType} from "./index";
import {TCartState} from "../cart";
import {IOrderForm} from "../../../models/interfaces";

export const CreateNewOrder = (id: string, date:string, userEmail:string, status:OrderStatusType, items:TCartState, delivery: IOrderForm) =>({
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

export const ChangeOrderStatus = (id:string, status:OrderStatusType) => ({
    type: OrdersActionType.CHANGE_ORDER_STATUS,
    payload: {
        id,
        status
    }
})