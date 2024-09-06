import React from 'react'
import HelperCard from '@/components/helper-card'
import { ScrollArea } from '@/components/ui/scroll-area';
import { sampleHelpers, sampleMessagesSent, sampleConnectedDevices } from '@/lib/constants';
import { AddHelperModal } from './add-helper-modal';
import { MessageSentAlert } from './messege-sent-alert';
import { ThemeToggle } from '@/components/header/theme-toggle';
import { Trash } from "lucide-react"
import { AddDeviceModal } from './add-device-modal';
import { UserSheet } from './user-sheet';

const getUserHelpers = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return sampleHelpers;
}

const Dashboard = async () => {

  const helpers = await getUserHelpers()

  return (
    <div className='border rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row justify-between gap-5 h-[calc(100vh-50px)] m-5 relative'>
      <div className='lg:w-[70%]'>
        <div className='flex justify-between items-center'>
          <h1 className="text-xl text-center w-full">Ajudantes</h1>
          <AddHelperModal />
        </div>
        <ScrollArea className="h-[calc(65vh-160px)] mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {helpers.map((helper) => (
              <HelperCard key={helper.id} helper={helper} />
            ))}
          </div>
        </ScrollArea>
        <div className='flex justify-between items-center mt-5'>
          <h1 className="text-xl text-center w-full">
            Dispositivos Conectados
          </h1>
          <AddDeviceModal />
        </div>

        <ScrollArea className="h-[calc(45vh-180px)] mt-4">
          <div className="mt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 hover:cursor-pointer">
              {sampleConnectedDevices.map((device, index) => (
                <div key={index} className="border rounded-lg p-4 relative group">
                  <h3 className="text-lg">{device}</h3>
                  <Trash className="h-3 w-3 hover:cursor-pointer hover:text-red-600 text-transparent group-hover:text-red-500 absolute top-2 right-2" strokeWidth={"2.25px"} />
                </div>
              ))}
            </div>
          </div>

        </ScrollArea>
      </div>
      <div className='lg:w-[30%]'>
        <h1 className="text-xl text-center w-full mb-5">
          Notificações Enviadas
        </h1>
        <ScrollArea className="h-[calc(100vh-160px)] mt-6">
          {sampleMessagesSent.map((message) => (
            <MessageSentAlert key={message.id} {...message} />
          ))}
        </ScrollArea>
      </div>
      <div className='absolute top-4 left-4'>
        <UserSheet />
      </div>
      <div className='absolute top-4 right-4'>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Dashboard