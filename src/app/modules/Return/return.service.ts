import prisma from "../../../shared/prisma";

const insertReturnEntryIntoDB = async (returnData: any) => {
  const newReturn = await prisma.returnBook.create({
    data: returnData,
  });
  return newReturn;
};

export const returnService = {
  insertReturnEntryIntoDB,
};
