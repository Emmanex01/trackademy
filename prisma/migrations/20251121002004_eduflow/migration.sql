/*
  Warnings:

  - Added the required column `tiltle` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" ADD COLUMN     "tiltle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "LessonProgress" ADD COLUMN     "progress" INTEGER NOT NULL DEFAULT 0;
