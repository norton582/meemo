import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    const body = await request.json();
    const { platforme, username, password, description } = body;

    try {
        const newPlatforme = await prisma.platforme.create({
            data: { platforme, username, password, description },
        });
        return NextResponse.json(newPlatforme, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Erreur lors de la création." }, { status: 500 });
    }
} 