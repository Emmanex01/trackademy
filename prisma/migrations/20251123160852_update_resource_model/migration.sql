/*
  Warnings:

  - You are about to drop the column `url` on the `Resource` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('pdf', 'video', 'recording');

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_courseId_fkey";

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "url",
ADD COLUMN     "author" TEXT,
ADD COLUMN     "categories" TEXT[],
ADD COLUMN     "description" TEXT,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "courseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
