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

const getBookByIdFromDB = async (id: string) => {
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return book;
};

export const bookService = {
  createBookIntoDB,
  getAllBooksFromDB,
  getBookByIdFromDB,
};
