import React from 'react'
import HelperCard from '@/components/helper-card'
import { ScrollArea } from '@/components/ui/scroll-area';
import { sampleHelpers, sampleMessagesSent } from '@/lib/constants';
import { AddHelperButton } from './add-helper-modal';
import { MessageSentAlert } from './messege-sent-alert';

const getUserHelpers = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return sampleHelpers;
}

const Dashboard = async () => {

  const helpers = await getUserHelpers()

  return (
    <div className='p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row justify-between gap-5 mt-5 h-[calc(100vh-150px)]'>
    <div className='lg:w-[70%] '>
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl text-center w-full">Painel de Controle</h1>
        <AddHelperButton />
      </div>
      <ScrollArea className="h-[calc(100vh-150px)] mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {helpers.map((helper) => (
            <HelperCard key={helper.id} helper={helper} />
          ))}
        </div>
      </ScrollArea>
      </div>
      <div className='lg:w-[30%]'>
        <h1 className="text-2xl text-center w-full mb-5">Estatísticas</h1>
        <ScrollArea className="h-[calc(100vh-150px)] mt-6">
          {sampleMessagesSent.map((message) => (
            <MessageSentAlert key={message.id} {...message} />
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}

export default Dashboard