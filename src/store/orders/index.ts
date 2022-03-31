import {ItemCardType} from "../cart";
import {InferValueTypes} from "../../models/common";
import * as actions from "./actions";
import {OrdersActionType} from "./action-types";
import {IOrderForm} from "../../models/interfaces";

const initialState: OrdersType = {}
export type OrderStatusType = 'inProcess' | 'paid' | 'onTheWay' | 'Finished';


type OrderType = {
    date:  string,
    status: OrderStatusType
    items: ItemCardType
    userEmail: string
    delivery: IOrderForm
}

export type OrdersType = {
    [orderId: string]: OrderType
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionTypes): OrdersType {
    switch (action.type) {
        case OrdersActionType.CREATE_NEW_ORDER: {
            return {...state, [action.payload.id]: {...action.payload}}
        }
        default:
            return state
    }
}