import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Formulaire } from "./formulaire";



export default function Page() {
    return (
        <div className="w-full h-full flex items-center mt-5 justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Création de compte</CardTitle>
                    <CardDescription>
                        Remplir les champs ci-dessous pour créer votre compte
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Formulaire/>
                </CardContent>
            </Card>
        </div>
    );
}