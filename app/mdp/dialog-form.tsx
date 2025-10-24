"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MdpForm } from "./mdp-form"
import { useState } from "react"

export function DialogDemo() {

 
 const [open, setOpen] = useState(false)
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Ajouter</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ajouter une nouvelle Note</DialogTitle>
            <DialogDescription>
              Veuillez remplir le formulaire pour stocker une nouvelle note de mon mot de passe.
            </DialogDescription>
          </DialogHeader>

          <MdpForm onSuccess={() => setOpen(false)}/>
            
        </DialogContent>
    </Dialog>
  )
}
