-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_weather" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "temperature" REAL NOT NULL,
    "humidity" REAL NOT NULL,
    "brightness" REAL NOT NULL,
    "hour_created" TEXT NOT NULL,
    "created_at" TEXT NOT NULL
);
INSERT INTO "new_weather" ("brightness", "created_at", "hour_created", "humidity", "id", "temperature") SELECT "brightness", "created_at", "hour_created", "humidity", "id", "temperature" FROM "weather";
DROP TABLE "weather";
ALTER TABLE "new_weather" RENAME TO "weather";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
