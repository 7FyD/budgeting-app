import { useRouter } from "next/navigation";
import { SafeUser } from "../types";

export function useRequireBudget(currentUser?: SafeUser | null) {
  const router = useRouter();

  if (currentUser?.email && !currentUser.budgetId) {
    router.push("/add-info");
  }

  // Implement a function to fetch user data
  function getUser() {}
}
