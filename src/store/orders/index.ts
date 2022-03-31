import {ItemCardType} from "../cart";
import {InferValueTypes} from "../../models/common";
import * as actions from "./actions";
import {OrdersActionType} from "./action-types";
import {IOrderForm} from "../../models/interfaces";
import {ORDER_STATUSES} from "../../models/feels";

const initialState: OrdersType = {}
export type OrderStatusType = ORDER_STATUSES


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
        case OrdersActionType.CHANGE_ORDER_STATUS:{
            return {...state, [action.payload.id]: {...state[action.payload.id], status: action.payload.status}}
        }
        default:
            return state
    }
}