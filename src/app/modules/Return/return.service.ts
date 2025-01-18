import prisma from "../../../shared/prisma";

const insertReturnEntry = async (returnData: any) => {
  const newReturn = await prisma.returnBook.create({
    data: returnData,
  });
  return newReturn;
};
