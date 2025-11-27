/*
  Warnings:

  - You are about to drop the column `tiltle` on the `Goal` table. All the data in the column will be lost.
  - Added the required column `title` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "tiltle",
ADD COLUMN     "title" TEXT NOT NULL;
