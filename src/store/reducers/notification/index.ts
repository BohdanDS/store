import {InferValueTypes} from "../../../models/common";
import {NotificationActionTypes} from "./actions-types";
import * as actions from "./actions";
import {TNotification} from "../../../models/notification";

export type TNotificationState = {
    notification: TNotification
    isShowing: boolean
}

const initialState: TNotificationState = {
    notification: {
        notificationType: 'success',
        message: null,
        description: null,
    },
    isShowing: false
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionTypes): TNotificationState {
    switch (action.type) {
        case NotificationActionTypes.SHOW_NOTIFICATION: {
            return {...state, isShowing: true, notification:{...action.notification}}
        }
        case NotificationActionTypes.CLOSE_NOTIFICATION: {
            return {...state, isShowing: false}
        }
        default:
            return state
    }
}