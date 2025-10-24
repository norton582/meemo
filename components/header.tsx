import React from "react";
import { ButtonDark } from "./button-dark";
import Link from "next/link";
import { getUser } from "@/lib/auth-server";
import { Button, buttonVariants } from "./ui/button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";


export function Header() {
    return(
        <div
        className="bg-purple-400 py-6 px-8 text-white flex items-center justify-between shadow-md rounded-b-2xl dark:bg-black/2 dark:shadow-lg dark:border dark:text-gray-200"
    >
        <div className="font-bold text-2xl tracking-wide">
            Meemo
        </div>
        <div className="flex items-center gap-6 font-medium text-lg">
            <Link
            href="/"
            className="relative px-2 py-1 transition-colors hover:text-purple-900 dark:hover:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-md px-4"
            >
            Accueil
            </Link>
            <Link
            href="/mdp"
            className="relative px-2 py-1 transition-colors hover:text-purple-900 dark:hover:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-md px-4"
            >
            Secret
            </Link>
            <Link
            href="#"
            className="relative px-2 py-1 transition-colors hover:text-purple-900 dark:hover:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-800 rounded-md px-4"
            >
            A propos
            </Link>
            
        </div>
        <div className="flex gap-2">
            <div className="pt-2"><AuthButton/></div>
            <div><ButtonDark/></div>
        </div>
    </div>
    )
}

export const AuthButton = async () => {
    const user = await getUser();
    if (!user) {
        return(
            <Link
                href="/login"
                className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Se connecter
            </Link>
        )
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1">
                    <Avatar className="size-6">
                        <AvatarImage src="https://github.com/shadcn.png" alt="avatar"/>
                        <AvatarFallback>{user.email[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span>{user.name}</span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <form action={async()=>{
                            "use server";

                            await auth.api.signOut({
                                headers : await headers()
                            });

                            redirect("/login");
                        }}>
                        <Button className="w-full" type="submit" variant="destructive">Déconnexion</Button>
                    </form>
                </DropdownMenuItem>
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
};