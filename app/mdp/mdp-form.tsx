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

export function MdpForm() {
    

    const router = useRouter()
    
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
        const reponse = await fetch("/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        })

        if (reponse.ok) {
            router.push("/mdp");
            router.refresh()
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
                                <FormLabel>Username</FormLabel>
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
                   
                    <Button type="submit">
                        Enregistrer
                    </Button>
                </form>
            </Form>
        </div>
    )
}