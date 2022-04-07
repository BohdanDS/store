import * as actions from './actions'
import {ORDER_STATUSES} from "../../../models/feels";
import {InferValueTypes} from "../../../models/common";
import {OrdersFilterActionType} from "./action-types";

const date = new Date()

const initialState: InitialStateType = {
    fromDate: new Date(date.getFullYear(), date.getMonth(), 1).toISOString().substring(0, 10),
    toDate: new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().substring(0, 10),
    status: ORDER_STATUSES.ALL_ORDERS,
}

type InitialStateType = {
    fromDate: string,
    toDate: string,
    status: ORDER_STATUSES
}


type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionTypes): InitialStateType {
    switch (action.type) {
        case OrdersFilterActionType.SET_FROM_DATE_VALUE: {
            return {...state, fromDate: action.fromDate}
        }
        case OrdersFilterActionType.SET_TO_DATE_VALUE: {
            return {...state, toDate: action.toDate}
        }
        case OrdersFilterActionType.SET_ORDER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

