import prisma from "../../../shared/prisma";

const getAllBooksFromDB = async () => {
  const books = await prisma.book.find();
  return books;
};

export const bookService = {
  getAllBooksFromDB,
};
