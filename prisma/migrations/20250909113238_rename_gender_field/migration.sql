/*
  Warnings:

  - You are about to drop the column `grnder` on the `user` table. All the data in the column will be lost.
  - Added the required column `gender` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "grnder",
ADD COLUMN     "gender" "public"."GenderType" NOT NULL;
