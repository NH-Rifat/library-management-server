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

const getMemberByIdFromDB = async (memberId: string) => {
  const member = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  return member;
};

const updateMemberByIdIntoDB = async (memberId: string, memberData: any) => {
  const member = await prisma.member.update({
    where: {
      memberId,
    },
    data: memberData,
  });
  return member;
};

const deleteMemberByIdFromDB = async (memberId: string) => {
  const member = await prisma.member.delete({
    where: {
      memberId,
    },
  });
  return member;
};

export const memberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getMemberByIdFromDB,
  updateMemberByIdIntoDB,
  deleteMemberByIdFromDB,
};
