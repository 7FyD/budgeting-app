"use client";

import { useRouter } from "next/navigation";
import CenterDropdown from "./CenterDropdown";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
interface AccountMenuProps {
  currentUser?: SafeUser | null;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  return (
    <div>
      <div className="hidden md:flex flex-row gap-4 justify-center">
        {!currentUser ? (
          <>
            <p className="cursor-pointer" onClick={() => router.push("/login")}>
              Login
            </p>
            <p
              className="cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Join for free
            </p>
          </>
        ) : (
          <>
            <p className="cursor-pointer" onClick={() => signOut()}>
              Signout
            </p>
          </>
        )}
      </div>
      <div className="block md:hidden w-auto md:w-auto ">
        <CenterDropdown label="Account" />
      </div>
    </div>
  );
};

export default AccountMenu;
