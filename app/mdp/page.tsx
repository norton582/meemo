
import { DialogDemo } from "./dialog-form";
import { prisma } from "@/lib/prisma";
import { DataTable } from "./datatable";
import { columns } from "./colonne";
import { unauthorized } from "next/navigation";
import { getUser } from "@/lib/auth-server";



export default async function Page() {

    const user = await getUser();
      if(!user){
        return unauthorized();
      }

    //On recupére la liste des données 
    const plateformes = await prisma.platforme.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return(
        <div className="w-full max-w-[900px] mx-auto py-5">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold tracking-tight">Gestion des mots de passe</h2>
                <DialogDemo/>
            </div>
            
            <DataTable columns={columns} data={plateformes}/>
        </div>
    )
}