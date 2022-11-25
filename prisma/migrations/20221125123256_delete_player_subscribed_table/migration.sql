/*
  Warnings:

  - You are about to drop the `playerSubscribed` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Emailsubscribed" ADD COLUMN "validation" BOOLEAN DEFAULT false;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "playerSubscribed";
PRAGMA foreign_keys=on;
