
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { getUser } from "@/lib/auth-server";
import { unauthorized } from "next/navigation";

export default async function Home() {

  const user = await getUser();
  if(!user){
    return unauthorized();
  }

  return (
    <div className="w-full mx-auto max-w-md flex-col gap-6 mt-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Confidentialité et Sécurité</ItemTitle>
          <ItemDescription>
            Cette application a pour objectif de stocker en toute sécurité mes mots de passe. 
  
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Merci !
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" className="mt-6" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>RAKOTOVAO Richard Norton</ItemTitle>
            <ItemDescription>norton.rakotovao@gmail.com</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  );
}
