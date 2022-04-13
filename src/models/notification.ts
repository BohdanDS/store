export type TNotification = {
    notificationType: 'success' | 'warning' | 'info' | 'error'
    message: string | null
    description: string | null
}