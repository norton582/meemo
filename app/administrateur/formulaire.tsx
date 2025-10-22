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
import { signUp } from "@/lib/auth-client"
import { toast } from "sonner"
import { SubmitButton } from "@/components/button-submit"



const formSchema = z.object({
    name : z.string().min(3,{
        message: "3 Caractère minimum.",
    }),
    email: z.string().email({
        message: "Adresse e-mail invalide.",
    }),
    password: z.string().min(5,{
        message: "Mot de passe trop court",
    }),
})

export function Formulaire() {
    
    const router = useRouter()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        await signUp.email(
            {
                name: values.name,
                email: values.email,
                password: values.password,  
            },

            {
                onSuccess: () => {
                    toast.success("Création réussie !")
                    router.push("/")
                    router.refresh()
                },
                onError: (error) => {
                    toast.error(error.error.message);
                },
            }
        )
    }

 
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    
                    <SubmitButton/>
                </form>
            </Form>
        </div>
    )
}