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
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Número de telefone inválido"),
  sms: z.boolean(),
  phone: z.boolean(),
}).refine(data => data.sms || data.phone, {
  message: "Pelo menos um método de contato deve ser selecionado",
  path: ["contactMethod"],
})

type FormValues = z.infer<typeof formSchema>

export function AddHelperModal() {

  const [open, setOpen] = useState(false)
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      sms: false,
      phone: false,
    },
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    toast.success("Ajudante adicionado com sucesso")
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
          Adicionar Ajudante
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Ajudante</DialogTitle>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de telefone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2">
            <FormLabel>Métodos de contato</FormLabel>
              <FormField
                control={form.control}
                name="sms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>WhatsApp</FormLabel>
                      <FormDescription>
                        Receber notificações por WhatsApp
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                      className="data-[state=checked]:bg-[#6A9C89]"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Ligação</FormLabel>
                      <FormDescription>
                        Receber notificações por ligação
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        className="data-[state=checked]:bg-[#6A9C89]"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormMessage>{form.formState.errors.sms?.message || form.formState.errors.phone?.message}</FormMessage>
            <Button type="submit" className="w-full bg-[#e48035] text-white hover:bg-[#CD5C08]/90">Adicionar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}