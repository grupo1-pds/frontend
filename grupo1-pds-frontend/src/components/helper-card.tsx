import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Plus, Trash, FilePenLine} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

interface Notification {
  type: "SMS" | "PHONE" | "BOTH"
}

interface Helper {
  id: string
  name: string
  email: string
  avatarImage: string
  notificationType: Notification
}
const HelperCard = (
  { helper }: { helper: Helper }
) => {

  return (
    <div className='mt-3'>
    <div className='flex p-3 border rounded-xl items-center justify-between'>
      <div className='flex gap-5 items-center'>
      <Avatar className="w-12 h-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='rounded-xl' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className='text-lg hover:cursor-pointer hover:underline'>{helper.name}</h1>
      </div>
      <div className='flex gap-1'>
        <FilePenLine size={16} className='text-gray-900 hover:cursor-pointer hover:text-gray-700'/>
        <Trash size={16} className='text-gray-900 hover:cursor-pointer hover:text-red-500' />
      </div>
    </div>
  </div>
  )
}

export default HelperCard