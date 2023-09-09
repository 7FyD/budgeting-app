import getCurrentUser from "../actions/getCurrentUser";
import AddInfoPage from "./AddInfoPage";

export default async function AddInfo() {
  const currentUser = await getCurrentUser();
  return <AddInfoPage currentUser={currentUser} />;
}
