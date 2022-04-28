export type TNotification = {
    notificationType: NotificationType
    message: string | null
    description: string | null
}
export type NotificationType = 'success' | 'warning' | 'info' | 'error'