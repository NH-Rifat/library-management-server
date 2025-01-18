import { BorrowedBook } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertBorrowEntryIntoDB = async (borrow: any) => {
  const newBorrow = await prisma.borrowedBook.create({
    data: borrow,
  });
  return newBorrow;
};

export const borrowService = {
  insertBorrowEntryIntoDB,
};
