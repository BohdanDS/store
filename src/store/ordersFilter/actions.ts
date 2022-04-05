import {OrdersFilterActionType} from "./action-types";
import {ORDER_STATUSES} from "../../models/feels";

export const SetFromDateValue = (fromDate:string)=>({
    type:OrdersFilterActionType.SET_FROM_DATE_VALUE,
    fromDate
})

export const SetToDateValue = (toDate:string)=>({
    type: OrdersFilterActionType.SET_TO_DATE_VALUE,
    toDate
})

export const SetOrderStatus = (status:ORDER_STATUSES) => ({
    type: OrdersFilterActionType.SET_ORDER_STATUS,
    status
})