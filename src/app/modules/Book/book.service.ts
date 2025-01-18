import prisma from "../../../shared/prisma";

const createBookIntoDB = async (bookData: any) => {
  const book = await prisma.book.create({
    data: bookData,
  });
  return book;
};

const getAllBooksFromDB = async () => {
  const books = await prisma.book.findMany();
  return books;
};

export const bookService = {
  createBookIntoDB,
  getAllBooksFromDB,
};
