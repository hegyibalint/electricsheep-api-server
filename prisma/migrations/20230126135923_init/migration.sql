-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT '/sheep-face.png',
    "last_login" TEXT NOT NULL DEFAULT 'a while ago',
    "balance" INTEGER NOT NULL,
    "currency_symbol" TEXT NOT NULL DEFAULT 'EUR'
);

-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_player_id" INTEGER NOT NULL,
    "second_player_id" INTEGER NOT NULL,
    "first_player_guess" BOOLEAN NOT NULL,
    "second_player_guess" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "game_id" INTEGER NOT NULL,
    "player_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");
