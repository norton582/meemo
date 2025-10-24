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
import { useRouter } from "next/navigation"
import { signIn } from "@/lib/auth-client"
import { toast } from "sonner"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"





const formSchema = z.object({
    email: z.string().email({
        message: "Adresse e-mail invalide.",
    }),
    password: z.string()
})

export function LoginForm() {
    
    const [loading, setLoading] = useState(false) // 👈 état pour le chargement
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        
        try {
            setLoading(true) // Début du chargement 
            await signIn.email(
            {
                email: values.email,
                password: values.password,  
            },

            {
                onSuccess: () => {
                    router.push("/")
                    toast.success("Connexion réussie !")
                    router.refresh();
                },
                onError: (error) => {
                    toast.error(error.error.message);
                },
            }
            )   
        }catch{
            toast.error("Une erreur est survenue lors de la connexion.")
        }finally {
            setLoading(false) // Fin du chargement 
        }
    }

    
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
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
                                <FormLabel>Mot de passe</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? (
                            <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Chargement...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </Button>  
                </form>
            </Form>
        </div>
    )
}