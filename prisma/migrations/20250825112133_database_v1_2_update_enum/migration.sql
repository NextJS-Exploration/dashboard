/*
  Warnings:

  - The values [Not_present] on the enum `AttendanceStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AttendanceStatus_new" AS ENUM ('Present', 'Not Present', 'Unknown');
ALTER TABLE "public"."Attendance" ALTER COLUMN "description" TYPE "public"."AttendanceStatus_new" USING ("description"::text::"public"."AttendanceStatus_new");
ALTER TYPE "public"."AttendanceStatus" RENAME TO "AttendanceStatus_old";
ALTER TYPE "public"."AttendanceStatus_new" RENAME TO "AttendanceStatus";
DROP TYPE "public"."AttendanceStatus_old";
COMMIT;

-- AlterEnum
ALTER TYPE "public"."Gender" ADD VALUE 'Other';
