/*
  Warnings:

  - You are about to drop the column `value` on the `weather` table. All the data in the column will be lost.
  - Added the required column `brightness` to the `weather` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour_created` to the `weather` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humidity` to the `weather` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperature` to the `weather` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_weather" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "temperature" REAL NOT NULL,
    "humidity" REAL NOT NULL,
    "brightness" REAL NOT NULL,
    "hour_created" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL
);
INSERT INTO "new_weather" ("created_at", "id") SELECT "created_at", "id" FROM "weather";
DROP TABLE "weather";
ALTER TABLE "new_weather" RENAME TO "weather";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
