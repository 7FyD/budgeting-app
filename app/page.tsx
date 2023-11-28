import Image from "next/image";

import getUserBudget from "./actions/getUserBudget";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const userBudget = await getCurrentUser();
  console.log(userBudget);
  return <div>Welcome to my home page!</div>;
}
