-- CreateTable
CREATE TABLE "returnBooks" (
    "returnId" TEXT NOT NULL,
    "returnDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "borrowId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "returnBooks_pkey" PRIMARY KEY ("returnId")
);

-- CreateIndex
CREATE UNIQUE INDEX "returnBooks_returnId_key" ON "returnBooks"("returnId");

-- CreateIndex
CREATE UNIQUE INDEX "returnBooks_borrowId_key" ON "returnBooks"("borrowId");

-- AddForeignKey
ALTER TABLE "returnBooks" ADD CONSTRAINT "returnBooks_borrowId_fkey" FOREIGN KEY ("borrowId") REFERENCES "borrowedBooks"("borrowId") ON DELETE RESTRICT ON UPDATE CASCADE;
