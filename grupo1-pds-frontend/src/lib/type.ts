export interface Helper {
  id: string
  name: string
  email: string
  avatarImage: string
  phoneNumber: string
  sms: boolean
  phone: boolean
  description: string
}

export interface MessageSent {
  id: string
  helper: Helper
  messageStatus: MessageStatus
  notification: NotificationSent
}

export interface MessageStatus {
  status : "delivered" | "pending" | "failed"
}

export interface NotificationSent {
  type: "SMS" | "PHONE" | "BOTH"
}
