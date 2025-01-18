import prisma from "../../../shared/prisma";

const createMemberIntoDB = async (memberData: any) => {
  const member = await prisma.member.create({
    data: memberData,
  });
  return member;
};

const getAllMembersFromDB = async () => {
  const members = await prisma.member.findMany();
  return members;
};

export const memberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
};
