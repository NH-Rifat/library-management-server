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
  if (!member) {
    throw new Error("Member not found");
  }
  return member;
};

const updateMemberByIdIntoDB = async (memberId: string, memberData: any) => {
  // find the member by memberId
  const memberById = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  if (!memberById) {
    throw new Error("Member not found");
  }
  const member = await prisma.member.update({
    where: {
      memberId,
    },
    data: memberData,
  });
  return member;
};

const deleteMemberByIdFromDB = async (memberId: string) => {
  // find the member by memberId
  const memberById = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  if (!memberById) {
    throw new Error("Member not found");
  }
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
