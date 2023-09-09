import DashboardPage from "./DashboardPage";
import getCurrentUser from "../actions/getCurrentUser";

export default async function Dashboard() {
  const currentUser = await getCurrentUser();
  return <DashboardPage currentUser={currentUser} />;
}
