/*
  Warnings:

  - You are about to drop the column `title` on the `Course` table. All the data in the column will be lost.
  - Added the required column `courseName` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Made the column `date` on table `Lesson` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Lesson` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "title",
ADD COLUMN     "courseName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "author" TEXT NOT NULL,
ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "duration" SET NOT NULL;
