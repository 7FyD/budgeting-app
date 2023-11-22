import LoginPage from "./LoginPage";
import getCurrentUser from "../actions/getCurrentUser";

export default async function Login() {
  const currentUser = await getCurrentUser();
  return <LoginPage currentUser={currentUser} />;
}
