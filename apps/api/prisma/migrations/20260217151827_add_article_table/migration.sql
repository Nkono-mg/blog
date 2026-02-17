/*
  Warnings:

  - You are about to alter the column `title` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - The `status` column on the `Article` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ArticleStatus" AS ENUM ('draft', 'published', 'archived');

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "title" SET DATA TYPE VARCHAR(100),
DROP COLUMN "status",
ADD COLUMN     "status" "ArticleStatus" NOT NULL DEFAULT 'draft';
