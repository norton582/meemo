"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useState } from "react"
import { Loader2 } from "lucide-react"





const formSchema = z.object({
    platforme: z.string().max(15, {
        message: "Le champ plateforme doit comporter au maximum 15 caractères.",
    }),
    username: z.string().min(2, {
        message: "Le nom d'utilisateur doit comporter au moins 2 caractères.",
    }),
    password: z.string().min(2, {
        message: "Le mot de passe doit comporter au moins 2 caractères.",
    }),
    description: z.string().optional(),
})

export function MdpForm({ onSuccess }: { onSuccess?: () => void }) {


    const router = useRouter()
    const [loading, setLoading] = useState(false) // 👈 état pour le chargement

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            platforme: "",
            username: "",
            password: "",
            description: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        /*const reponse = await fetch("/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        })

        if (reponse.ok) {
            toast.success("Terminé !")
            router.push("/mdp");
            router.refresh();
            onSuccess?.();
        } else {
            toast.error("Une erreur est survenue. Veuillez réessayer.")
        }*/
        try {
            setLoading(true) // ⏳ active le spinner

            const reponse = await fetch("/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })

            if (reponse.ok) {
                toast.success("Terminé !")
                router.push("/mdp")
                router.refresh()
                onSuccess?.() // ✅ ferme le dialogue
            } else {
                toast.error("Une erreur est survenue.")
            }
        } catch  {
            toast.error("Erreur de connexion au serveur.")
        } finally {
            setLoading(false) // 🟢 stoppe le spinner
        }

    }


    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="platforme"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Platforme</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username ou Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} ></Textarea>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? (
                            <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enregistrement...
                            </>
                        ) : (
                            "Enregistrer"
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    )
}