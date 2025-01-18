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

  if (!book) {
    throw new Error("Book not found");
  }
  return book;
};

const updateBookByIdIntoDB = async (id: string, bookData: any) => {
  // find the book by id
  const bookById = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  if (!bookById) {
    throw new Error("Book not found");
  }
  const book = await prisma.book.update({
    where: {
      id,
    },
    data: bookData,
  });
  return book;
};

const deleteBookByIdFromDB = async (id: string) => {
  // find the book by id
  const bookById = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  if (!bookById) {
    throw new Error("Book not found");
  }
  const book = await prisma.book.delete({
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
  updateBookByIdIntoDB,
  deleteBookByIdFromDB,
};
