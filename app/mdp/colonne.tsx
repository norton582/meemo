"use client";
import { ColumnDef } from "@tanstack/react-table";

type Plateforme = {
    id: number;
    platforme: string;
    username: string;
    password: string;
    description: string | null;
    createdAt: Date;
}

export const columns: ColumnDef<Plateforme>[] = [
  {
    accessorKey: "platforme",
    header: "Plateforme",
  },
  {
    accessorKey: "username",
    header: "Nom d’utilisateur",
  },
  {
    accessorKey: "password",
    header: "Mot de passe",
    cell: ({ row }) => (
      <span className="font-mono text-sm text-muted-foreground">
        {row.original.password}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Créé le",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
  },
]