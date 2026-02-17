/*
  Warnings:

  - You are about to alter the column `name` on the `Network` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `description` on the `Network` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - A unique constraint covering the columns `[name]` on the table `Network` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Network" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(100);

-- CreateIndex
CREATE UNIQUE INDEX "Network_name_key" ON "Network"("name");
