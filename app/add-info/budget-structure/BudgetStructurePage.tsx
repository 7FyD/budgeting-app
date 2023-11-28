"use client";

import { useRouter } from "next/navigation";
import { UserBudget } from "@prisma/client";

interface BudgetStructurePageProps {
  userBudget?: UserBudget | null;
}

const BudgetStructurePage: React.FC<BudgetStructurePageProps> = ({
  userBudget,
}) => {
  const router = useRouter();
  if (!userBudget) {
    router.push("/add-info");
  }
  let percentRentOfIncome =
    ((userBudget!.rentAndUtilities + userBudget!.extraExpenses) * 100) /
    userBudget!.monthlyIncome;
  percentRentOfIncome = Math.ceil(percentRentOfIncome);
  let needsUsage;
  console.log(percentRentOfIncome % 10 > 5);
  if (percentRentOfIncome % 10 > 5) {
    needsUsage = percentRentOfIncome - (percentRentOfIncome % 10) + 15;
  } else needsUsage = percentRentOfIncome - (percentRentOfIncome % 10) + 10;
  let remainingIncome = 100 - needsUsage;
  return (
    <div>
      For needs, you should allocate {needsUsage}% of your income. That leaves
      up {remainingIncome}% for both wants and savings/investments. You can
      divide this either like this: {remainingIncome / 2}% for wants and{" "}
      {remainingIncome / 2}% into a saving fund or an investment. On another
      hand, you could allocate more to your savings fun by using the following
      proportions:
      {Math.floor(remainingIncome / 3)}% for wants and{" "}
      {Math.ceil((2 * remainingIncome) / 3)}% for savings. If you end up having
      any left over money from your needs, it is advised to put them into the
      savings fund/invest them into whatever kind of investment plan you have
      (e.g. ETFs, individual stocks, government securities, etc.).
    </div>
  );
};

export default BudgetStructurePage;
