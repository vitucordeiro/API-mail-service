/*
  Warnings:

  - Added the required column `emailPlayer` to the `playerSubscribed` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_playerSubscribed" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playerName" TEXT NOT NULL,
    "playerHash" TEXT NOT NULL,
    "rankValorant" TEXT NOT NULL,
    "emailPlayer" TEXT NOT NULL,
    CONSTRAINT "playerSubscribed_emailPlayer_fkey" FOREIGN KEY ("emailPlayer") REFERENCES "Emailsubscribed" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_playerSubscribed" ("id", "playerHash", "playerName", "rankValorant") SELECT "id", "playerHash", "playerName", "rankValorant" FROM "playerSubscribed";
DROP TABLE "playerSubscribed";
ALTER TABLE "new_playerSubscribed" RENAME TO "playerSubscribed";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
