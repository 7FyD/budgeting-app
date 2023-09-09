"use client";

import { useRequireBudget } from "../hooks/useRequireBudget";
import { SafeUser } from "../types";

interface DashboardPageProps {
  currentUser?: SafeUser | null;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ currentUser }) => {
  useRequireBudget(currentUser);
  return <div></div>;
};

export default DashboardPage;
