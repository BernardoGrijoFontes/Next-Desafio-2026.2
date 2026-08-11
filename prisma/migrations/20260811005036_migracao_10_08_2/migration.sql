/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `foto_dois` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto_um` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "createdAt",
ADD COLUMN     "foto_dois" TEXT NOT NULL,
ADD COLUMN     "foto_um" TEXT NOT NULL;
