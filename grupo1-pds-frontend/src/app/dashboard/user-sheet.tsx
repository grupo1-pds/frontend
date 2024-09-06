import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { User } from 'lucide-react';

export function UserSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <Button variant="outline" size="icon" className='rounded-full shadow-none'>
          <User className="absolute h-[1.2rem] w-[1.2rem] " strokeWidth={"1.45px"} />
      </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Perfil de Usuário</SheetTitle>
          <SheetDescription>
            {'Faça alterações no seu perfil. Clique em "Salvar" para confirmar.'}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
        <div>
            <div className="flex flex-col items-start justify-center gap-2">       
            <Label htmlFor="name">
              Nome
            </Label>
            <Input id="name" value="Rafael Ribeiro"/></div>
          </div>
          <div>
            <div className="flex flex-col items-start justify-center gap-2">       
            <Label htmlFor="email">
              E-mail
            </Label>
            <Input id="email" value="rrlc@ic.ufal.br" disabled={true}/></div>
          </div>
          <div>
            <div className="flex flex-col items-start justify-center gap-2">       
            <Label htmlFor="phone">
              Telefone
            </Label>
            <Input id="phone" value="(82) 99902-3412"/></div>
          </div>
          <SheetClose asChild>
          <Button type="submit" className=" bg-[#e48035] text-white hover:bg-[#CD5C08]/90">Salvar</Button>
          </SheetClose>
         <Separator />
         <SheetTitle>Alterar Senha</SheetTitle>
          <SheetDescription>
            {'Altere sua senha. Clique em "Alterar Senha" para confirmar.'}
          </SheetDescription>
         <div>
            <div className="flex flex-col items-start justify-center gap-2">       
            <Label htmlFor="password">
              Senha Atual
            </Label>
            <Input id="email" type="password"/>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start justify-center gap-2">       
            <Label htmlFor="new_passowrd">
              Nova Senha
            </Label>
            <Input id="new_password" type="password"/>
            </div>
          </div>
          <SheetClose asChild>
          <Button type="submit" className="bg-[#e48035] text-white hover:bg-[#CD5C08]/90">Alterar Senha</Button>
          </SheetClose>
        </div>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
