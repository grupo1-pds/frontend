import { AlertCircle, Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import { MessageSent } from "@/lib/type"
 
export function MessageSentAlert(
  messageSent: MessageSent
) {
  return (
    <Alert variant={
      messageSent.messageStatus.status === "delivered" ? "success" :
      messageSent.messageStatus.status === "pending" ? "warning" :
      "destructive"
    } className="mb-5">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
  )
}