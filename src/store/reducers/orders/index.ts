import {TCartState} from "../cart";
import {InferValueTypes} from "../../../models/common";
import * as actions from "./actions";
import {OrdersActionType} from "./action-types";
import {IOrderForm} from "../../../models/interfaces";
import {ORDER_STATUSES} from "../../../models/feels";

const initialState: TOrdersState = {
    'b284a015-0781-4dff-8bee-79b99c90de00': {
        id: 'b284a015-0781-4dff-8bee-79b99c90de00',
        date: 'Fri Apr 01 2022 13:25:26 GMT+0300 (Москва, стандартное время)',
        userEmail: 'test@gmail.com',
        status: ORDER_STATUSES.ORDER_IN_PROGRESS,
        items: {
            'e474c35a-17db-4d9f-be53-863a63a683fd': 2
        },
        delivery: {
            shipping: 'Courier delivery',
            city: 'Гродно',
            addressLine: 'Фолюш 25',
            firstName: 'Bohdan',
            lastName: 'Peliutkevich',
            textArea: '',
            mobilePhone: '+375 (37) 533-65-52'
        }
    },
    'b284a015-0781-4dff-8bee-79b99c90de01': {
        id: 'b284a015-0781-4dff-8bee-79b99c90de01',
        date: 'Fri Apr 01 2022 13:25:26 GMT+0300 (Москва, стандартное время)',
        userEmail: 'test@gmail.com',
        status: ORDER_STATUSES.ORDER_PAID,
        items: {
            'e474c35a-17db-4d9f-be53-863a63a683fd': 2
        },
        delivery: {
            shipping: 'Courier delivery',
            city: 'Гродно',
            addressLine: 'Фолюш 25',
            firstName: 'Bohdan',
            lastName: 'Peliutkevich',
            textArea: '',
            mobilePhone: '+375 (37) 533-65-52'
        }
    },
    'b284a015-0781-4dff-8bee-79b99c90de02': {
        id: 'b284a015-0781-4dff-8bee-79b99c90de02',
        date: 'Fri Apr 01 2022 13:25:26 GMT+0300 (Москва, стандартное время)',
        userEmail: 'test@gmail.com',
        status: ORDER_STATUSES.ORDER_ON_THE_WAY,
        items: {
            'e474c35a-17db-4d9f-be53-863a63a683fd': 2
        },
        delivery: {
            shipping: 'Courier delivery',
            city: 'Гродно',
            addressLine: 'Фолюш 25',
            firstName: 'Bohdan',
            lastName: 'Peliutkevich',
            textArea: '',
            mobilePhone: '+375 (37) 533-65-52'
        }
    },
    'b284a015-0781-4dff-8bee-79b99c90de03': {
        id: 'b284a015-0781-4dff-8bee-79b99c90de03',
        date: 'Fri Apr 01 2022 13:25:26 GMT+0300 (Москва, стандартное время)',
        userEmail: 'test@gmail.com',
        status: ORDER_STATUSES.ORDER_FINISHED,
        items: {
            'e474c35a-17db-4d9f-be53-863a63a683fd': 2
        },
        delivery: {
            shipping: 'Courier delivery',
            city: 'Гродно',
            addressLine: 'Фолюш 25',
            firstName: 'Bohdan',
            lastName: 'Peliutkevich',
            textArea: '',
            mobilePhone: '+375 (37) 533-65-52'
        }
    },
    'b284a015-0781-4dff-8bee-79b99c90de04': {
        id: 'b284a015-0781-4dff-8bee-79b99c90de04',
        date: 'Fri Apr 01 2022 13:25:26 GMT+0300 (Москва, стандартное время)',
        userEmail: 'test@gmail.com',
        status: ORDER_STATUSES.ORDER_PAID,
        items: {
            'e474c35a-17db-4d9f-be53-863a63a683fd': 2
        },
        delivery: {
            shipping: 'Courier delivery',
            city: 'Гродно',
            addressLine: 'Фолюш 25',
            firstName: 'Bohdan',
            lastName: 'Peliutkevich',
            textArea: '',
            mobilePhone: '+375 (37) 533-65-52'
        }
    }
}
export type OrderStatusType = ORDER_STATUSES


export type OrderType = {
    id:string,
    date:  string,
    status: OrderStatusType
    items: TCartState
    userEmail: string
    delivery: IOrderForm
}

export type TOrdersState = {
    [orderId: string]: OrderType
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionTypes): TOrdersState {
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