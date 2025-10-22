import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "./login-form";


export default function Page() {
    return (
        <div className="w-full h-full flex items-center mt-5 justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Connectez-vous à votre compte</CardTitle>
                    <CardDescription>
                        Entrez votre email ci-dessous pour vous connecter à votre compte
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm/>
                </CardContent>
            </Card>
        </div>
    );
}