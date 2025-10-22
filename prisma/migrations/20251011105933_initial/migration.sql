-- CreateTable
CREATE TABLE "Platforme" (
    "id" SERIAL NOT NULL,
    "platforme" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Platforme_pkey" PRIMARY KEY ("id")
);
