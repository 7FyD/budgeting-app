import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getUserBudget() {
  const currentUser = await getCurrentUser();
  try {
    if (!currentUser) return null;

    const currentUserBudget = await prisma.userBudget.findUnique({
      where: {
        userId: currentUser.id,
      },
    });

    if (!currentUserBudget) return null;

    return currentUserBudget;
  } catch (error: any) {
    return null;
  }
}
