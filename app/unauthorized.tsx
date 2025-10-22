import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

export default function Unauthorized() {
    return (
        <div className="max-w-md flex mx-auto mt-4">
            <Alert variant="destructive">
                <AlertCircleIcon/>
                <AlertTitle>Authorisation réfusé</AlertTitle>
                <AlertDescription>
                    <p>Veuillez contacter le responsable.</p>
                </AlertDescription>
            </Alert>
        </div>
    );
}