import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "./prisma";


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    allowedOrigins: [       
        "https://meemo-two.vercel.app",     // 👈 domaine de production complet
    ],
    emailAndPassword: { 
        enabled: true, 
    },
    
});