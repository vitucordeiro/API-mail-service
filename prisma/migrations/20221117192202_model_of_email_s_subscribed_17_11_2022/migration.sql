-- CreateTable
CREATE TABLE "Emailsubscribed" (
    "email" TEXT NOT NULL,
    "dateSubscribed" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateIndex
CREATE UNIQUE INDEX "Emailsubscribed_email_key" ON "Emailsubscribed"("email");
