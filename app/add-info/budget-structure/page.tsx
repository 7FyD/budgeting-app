import getCurrentUser from "@/app/actions/getCurrentUser";
import getUserBudget from "@/app/actions/getUserBudget";
import { UserBudget } from "@prisma/client";
import BudgetStructurePage from "./BudgetStructurePage";

export default async function BudgetStructure() {
  const userBudget = await getUserBudget();
  return <BudgetStructurePage userBudget={userBudget} />;
}
