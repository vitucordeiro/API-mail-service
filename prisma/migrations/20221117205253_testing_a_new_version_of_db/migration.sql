/*
  Warnings:

  - You are about to drop the column `emailPlayer` on the `playerSubscribed` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_playerSubscribed" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playerName" TEXT NOT NULL,
    "playerHash" TEXT NOT NULL,
    "rankValorant" TEXT NOT NULL
);
INSERT INTO "new_playerSubscribed" ("id", "playerHash", "playerName", "rankValorant") SELECT "id", "playerHash", "playerName", "rankValorant" FROM "playerSubscribed";
DROP TABLE "playerSubscribed";
ALTER TABLE "new_playerSubscribed" RENAME TO "playerSubscribed";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
