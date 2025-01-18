/*
  Warnings:

  - You are about to drop the column `borrowedDate` on the `borrowedBooks` table. All the data in the column will be lost.
  - You are about to drop the column `returnedDate` on the `borrowedBooks` table. All the data in the column will be lost.
  - Changed the type of `publishedYear` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "publishedYear",
ADD COLUMN     "publishedYear" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "borrowedBooks" DROP COLUMN "borrowedDate",
DROP COLUMN "returnedDate";
