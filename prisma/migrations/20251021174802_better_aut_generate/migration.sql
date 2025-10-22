/*
  Warnings:

  - You are about to drop the column `Password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."user_username_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "Password",
DROP COLUMN "username",
ADD COLUMN     "image" TEXT;
