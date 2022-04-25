import React, {useEffect} from 'react';
import {notification} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {TApplicationState} from "../../store/aplication-state";
import {TNotificationState} from "../../store/reducers/notification";
import {CloseNotification} from "../../store/reducers/notification/actions";
import {NotificationType} from "../../models/notification";



const Notification = () => {

    const dispatch = useDispatch()
    const notificationData = useSelector<TApplicationState, TNotificationState>(state => state.notification)

    useEffect(() => {
        notificationData.isShowing &&
        notificationData.notification && openNotificationWithIcon(notificationData.notification.notificationType)
        return () => {
            dispatch(CloseNotification())
        }
    }, [notificationData.isShowing])

    const openNotificationWithIcon = (type: NotificationType) => {
        notificationData.notification && notification[notificationData.notification.notificationType]({
            message: notificationData.notification.message,
            description: notificationData.notification.description
        });
    };

    return null;
};

export default Notification;