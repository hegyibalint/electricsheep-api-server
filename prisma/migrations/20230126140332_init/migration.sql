-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT '/openai-sheep-face.png',
    "last_login" TEXT NOT NULL DEFAULT 'a while ago',
    "balance" INTEGER NOT NULL,
    "currency_symbol" TEXT NOT NULL DEFAULT 'EUR'
);
INSERT INTO "new_Player" ("avatar", "balance", "currency_symbol", "email", "id", "last_login", "name") SELECT "avatar", "balance", "currency_symbol", "email", "id", "last_login", "name" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
