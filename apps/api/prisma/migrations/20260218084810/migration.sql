/*
  Warnings:

  - The values [draft] on the enum `EmailStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EmailStatus_new" AS ENUM ('pending', 'sent', 'failed');
ALTER TABLE "public"."EmailNotification" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "EmailNotification" ALTER COLUMN "status" TYPE "EmailStatus_new" USING ("status"::text::"EmailStatus_new");
ALTER TYPE "EmailStatus" RENAME TO "EmailStatus_old";
ALTER TYPE "EmailStatus_new" RENAME TO "EmailStatus";
DROP TYPE "public"."EmailStatus_old";
ALTER TABLE "EmailNotification" ALTER COLUMN "status" SET DEFAULT 'pending';
COMMIT;

-- AlterTable
ALTER TABLE "EmailNotification" ALTER COLUMN "status" SET DEFAULT 'pending';
