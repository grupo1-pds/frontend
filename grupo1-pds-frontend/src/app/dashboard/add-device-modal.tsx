"use client"
import * as z from "zod"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { toast } from "sonner"
import { Switch } from "@/components/ui/switch"

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  id: z.string().min(2, "ID deve ter pelo menos 2 caracteres"),
})

type FormValues = z.infer<typeof formSchema>

export function AddDeviceModal() {

  const [open, setOpen] = useState(false)
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      id: "",
    },
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    toast.success("Device adicionado com sucesso")
    setOpen(false)
    form.reset()
  }

  const handleCloseDialog = () => {
    setOpen((open) => !open)
    form.reset()
  }

  return (
    <Dialog open={open} onOpenChange={handleCloseDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-[#e48035] text-white hover:text-white hover:bg-[#e48035]/90">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Dispositivo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Dispositivo</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Identificação</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.id?.message}</FormMessage>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-[#e48035] text-white hover:bg-[#CD5C08]/90">Adicionar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}