"use client";

import { useRequireBudget } from "../hooks/useRequireBudget";
import { SafeUser } from "../types";

interface AddInfoPageProps {
  currentUser?: SafeUser | null;
}

const AddInfoPage: React.FC<AddInfoPageProps> = ({ currentUser }) => {
  return (
    <div className="font-bold">
      Input your budgeting info! (total monthly budget, rent, other mandatory
      expenses such as debts/mortgage, etc)
    </div>
  );
};

export default AddInfoPage;
