import {NotificationActionTypes} from './actions-types'
import {TNotification} from "../../../models/notification";

export const ShowNotification = (notification: TNotification) => ({
    type: NotificationActionTypes.SHOW_NOTIFICATION,
    notification
})

export const CloseNotification = () => ({
    type: NotificationActionTypes.CLOSE_NOTIFICATION
})