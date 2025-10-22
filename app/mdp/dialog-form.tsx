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

export function DialogDemo() {
  return (
    <Dialog>
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

            <MdpForm/>
            
        </DialogContent>
    </Dialog>
  )
}
