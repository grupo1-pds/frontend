import React from 'react'
import { Plus, Trash, FilePenLine} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

import { HelperEditCard } from '@/app/dashboard/helper-info-card';
import { Button } from './ui/button';
import DeleteHelperAlert from '@/app/dashboard/delete-helper-alert';

interface Helper {
  id: string
  name: string
  email: string
  avatarImage: string
  phoneNumber: string
  sms: boolean
  phone: boolean
  description: string
}
const HelperCard = (
  { helper }: { helper: Helper }
) => {

  return (
    <div className='flex p-3 border rounded-xl items-center justify-between'>
      <div className='flex gap-5 items-center'>
      <Avatar className="w-8 h-8">
        <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="@shadcn" className='rounded-xl' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className='text-lg hover:cursor-pointer hover:underline'>{helper.name}</h1>
      </div>
      <div className='flex gap-1'>
        <HelperEditCard name={helper.name} phoneNumber={helper.phoneNumber} sms={helper.sms} phone={helper.phone} description={helper.description} />
        <DeleteHelperAlert helperId={helper.id} helperName={helper.name} />
      </div>
    </div>
  )
}

export default HelperCard