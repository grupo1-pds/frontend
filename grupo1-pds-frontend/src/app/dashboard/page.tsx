import React from 'react'
import HelperCard from '@/components/helper-card'
import { Plus} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';


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

const sampleHelpers: Helper[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    avatarImage: "https://example.com/avatars/john-doe.jpg",
    notificationType: { type: "SMS" }
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatarImage: "https://example.com/avatars/jane-smith.jpg",
    notificationType: { type: "PHONE" }
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    avatarImage: "https://example.com/avatars/bob-johnson.jpg",
    notificationType: { type: "BOTH" }
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    avatarImage: "https://example.com/avatars/alice-williams.jpg",
    notificationType: { type: "SMS" }
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    avatarImage: "https://example.com/avatars/charlie-brown.jpg",
    notificationType: { type: "PHONE" }
  },
  {
    id: "6",
    name: "Eva Garcia",
    email: "eva.garcia@example.com",
    avatarImage: "https://example.com/avatars/eva-garcia.jpg",
    notificationType: { type: "BOTH" }
  },
  {
    id: "7",
    name: "David Lee",
    email: "david.lee@example.com",
    avatarImage: "https://example.com/avatars/david-lee.jpg",
    notificationType: { type: "SMS" }
  },
  {
    id: "8",
    name: "Grace Kim",
    email: "grace.kim@example.com",
    avatarImage: "https://example.com/avatars/grace-kim.jpg",
    notificationType: { type: "PHONE" }
  },
  {
    id: "9",
    name: "Frank Zhang",
    email: "frank.zhang@example.com",
    avatarImage: "https://example.com/avatars/frank-zhang.jpg",
    notificationType: { type: "BOTH" }
  },
  {
    id: "10",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    notificationType: { type: "SMS" }
  },
  {
    id: "11",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    notificationType: { type: "SMS" }
  },
  {
    id: "12",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    notificationType: { type: "SMS" }
  },
  {
    id: "13",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    notificationType: { type: "SMS" }
  },
  {
    id: "14",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    notificationType: { type: "SMS" }
  }
];

const getUserHelpers = async () => {

}

const Dashboard = async () => {

  const helpers = await getUserHelpers()

  return (
    <div className='p-7'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl'>Lista de Ajudantes</h1>
        <Button>
          <Plus size={16} />
          <span className='ml-2'>Adicionar</span>
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-150px)] mt-6">
        <div className="flex flex-col">
          {sampleHelpers.map((helper) => (
            <HelperCard key={helper.id} helper={helper} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default Dashboard