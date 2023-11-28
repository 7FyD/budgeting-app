import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const body = await request.json();
  let {
    monthlyIncome,
    rentAndUtilities,
    extraExpenses,
    extraIncome /* other budget-related fields */,
  } = body;

  try {
    // Assuming you have a function to get the current user
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error("No user found in the current session.");
    }
    monthlyIncome = parseInt(monthlyIncome);
    rentAndUtilities = parseInt(rentAndUtilities);
    extraExpenses = parseInt(extraExpenses);
    extraIncome = parseInt(extraIncome);
    // Create a new budget for the current user
    const userBudget = await prisma.userBudget.create({
      data: {
        monthlyIncome,
        rentAndUtilities,
        extraExpenses,
        extraIncome,
        userId: currentUser.id,
      },
    });

    // Update the current user with the budgetId
    await prisma.user.update({
      where: { id: currentUser.id },
      data: {
        budgetId: userBudget.id,
      },
    });

    return NextResponse.json(userBudget);
  } catch (error) {
    console.error("Error creating budget for the current user:", error);
    throw new Error("Failed to create budget for the current user.");
  }
}
