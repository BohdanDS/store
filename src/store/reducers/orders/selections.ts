import {AppRootStateType} from "../../store";
import {createSelector} from "reselect";
import {OrderStatusType} from "./index";
import {ORDER_STATUSES} from "../../../models/feels";


const ordersState = (state: AppRootStateType) => state.orders


export const ordersByStatus = (status: OrderStatusType) => createSelector(
    ordersState,
    orders => status === ORDER_STATUSES.ALL_ORDERS ? Object.values(orders) : Object.values(orders).filter(order => order.status === status)
)

