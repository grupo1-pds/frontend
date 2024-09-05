import React from 'react'
import HelperCard from '@/components/helper-card'
import { ScrollArea } from '@/components/ui/scroll-area';
import { sampleHelpers, sampleMessagesSent } from '@/lib/constants';
import { AddHelperButton } from './add-helper-modal';
import { MessageSentAlert } from './messege-sent-alert';
import { ThemeToggle } from '@/components/header/theme-toggle';

export const sampleConnectedDevices = [
  "Camera 1 (Cozinha)",
  "Camera 2 (Sala)",
  "Camera 3 (Quarto)",
  "Camera 4 (Banheiro)",
  "Camera 5 (Garagem)",
];

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
          <AddHelperButton />
        </div>
        <ScrollArea className="h-[calc(65vh-160px)] mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {helpers.map((helper) => (
              <HelperCard key={helper.id} helper={helper} />
            ))}
          </div>
        </ScrollArea>
        {/* Connected Devices Section */}
        <div className='flex justify-between items-center mt-5'>
          <h1 className="text-xl text-center w-full">
            Dispositivos Conectados
          </h1>
          <AddHelperButton />
        </div>

        <ScrollArea className="h-[calc(45vh-180px)] mt-4">
          <div className="mt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {
                sampleConnectedDevices.map((device, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="text-lg">{device}</h3>
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
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Dashboard