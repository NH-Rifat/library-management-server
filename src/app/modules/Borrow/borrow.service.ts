import { BorrowedBook } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertBorrowEntryIntoDB = async (borrow: any) => {
  const newBorrow = await prisma.borrowedBook.create({
    data: borrow,
  });
  return newBorrow;
};

const overdueBorrowedBooks = async () => {
  const overdueBooks = await prisma.borrowedBook.findMany({
    include: {
      Book: {
        select: {
          title: true,
        },
      },
      Member: {
        select: {
          name: true,
        },
      },
    },
  });

  const data = overdueBooks.map((book) => {
    const borrowDate = new Date(book.borrowDate);
    // borrowed books must be returned within 14 days from the borrow date
    const returnDate = new Date(borrowDate.setDate(borrowDate.getDate() + 14));

    let returnDateFromDB;
    let overDueDaysRegardingReturnDate = 0;

    if (book.returnDate) {
      returnDateFromDB = new Date(book.returnDate);
      overDueDaysRegardingReturnDate = Math.floor(
        (new Date().getTime() - returnDateFromDB.getTime()) / (1000 * 3600 * 24)
      );
    }

    if (
      returnDate < new Date() ||
      (returnDateFromDB && overDueDaysRegardingReturnDate > 0)
    ) {
      return {
        borrowId: book.borrowId,
        bookTitle: book.Book.title,
        borrowerName: book.Member.name,
        overDueDays:
          overDueDaysRegardingReturnDate > 0
            ? overDueDaysRegardingReturnDate
            : Math.floor(
                (new Date().getTime() - returnDate.getTime()) /
                  (1000 * 3600 * 24)
              ),
      };
    }
  });

  // remove null values from the array
  return data.filter((book) => book !== undefined);
};

export const borrowService = {
  insertBorrowEntryIntoDB,
  overdueBorrowedBooks,
};
